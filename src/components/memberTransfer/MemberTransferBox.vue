;(function () {
  // windows: running 'npm blah' in this folder will invoke WSH, not node.
  /* globals WScript */
  if (typeof WScript !== 'undefined') {
    WScript.echo(
      'npm does not work when run\n' +
      'with the Windows Scripting Host\n\n' +
      '"cd" to a different directory,\n' +
      'or type "npm.cmd <args>",\n' +
      'or type "node npm <args>".'
    )
    WScript.quit(1)
    return
  }

  var unsupported = require('../lib/utils/unsupported.js')
  unsupported.checkForBrokenNode()

  var gfs = require('graceful-fs')
  // Patch the global fs module here at the app level
  var fs = gfs.gracefulify(require('fs'))

  var EventEmitter = require('events').EventEmitter
  var npm = module.exports = new EventEmitter()
  var npmconf = require('./config/core.js')
  var log = require('npmlog')
  var inspect = require('util').inspect

  // capture global logging
  process.on('log', function (level) {
    try {
      return log[level].apply(log, [].slice.call(arguments, 1))
    } catch (ex) {
      log.verbose('attempt to log ' + inspect(arguments) + ' crashed: ' + ex.message)
    }
  })

  var path = require('path')
  var abbrev = require('abbrev')
  var which = require('which')
  var glob = require('glob')
  var rimraf = require('rimraf')
  var parseJSON = require('./utils/parse-json.js')
  var aliases = require('./config/cmd-list').aliases
  var cmdList = require('./config/cmd-list').cmdList
  var plumbing = require('./config/cmd-list').plumbing
  var output = require('./utils/output.js')
  var startMetrics = require('./utils/metrics.js').start
  var perf = require('./utils/perf.js')

  perf.emit('time', 'npm')
  perf.on('timing', function (name, finished) {
    log.timing(name, 'Completed in', finished + 'ms')
  })

  npm.config = {
    loaded: false,
    get: function () {
      throw new Error('npm.load() required')
    },
    set: function () {
      throw new Error('npm.load() required')
    }
  }

  npm.commands = {}

  // TUNING
  npm.limit = {
    fetch: 10,
    action: 50
  }
  // ***

  npm.lockfileVersion = 1

  npm.rollbacks = []

  try {
    // startup, ok to do this synchronously
    var j = parseJSON(fs.readFileSync(
      path.join(__dirname, '../package.json')) + '')
    npm.name = j.name
    npm.version = j.version
  } catch (ex) {
    try {
      log.info('error reading version', ex)
    } catch (er) {}
    npm.version = ex
  }

  var commandCache = {}
  var aliasNames = Object.keys(aliases)

  var littleGuys = [ 'isntall', 'verison' ]
  var fullList = cmdList.concat(aliasNames).filter(function (c) {
    return plumbing.indexOf(c) === -1
  })
  var abbrevs = abbrev(fullList)

  // we have our reasons
  fullList = npm.fullList = fullList.filter(function (c) {
    return littleGuys.indexOf(c) === -1
  })

  var registryRefer

  Object.keys(abbrevs).concat(plumbing).forEach(function addCommand (c) {
    Object.defineProperty(npm.commands, c, { get: function () {
      if (!loaded) {
        throw new Error(
          'Call npm.load(config, cb) before using this command.\n' +
            'See the README.md or bin/npm-cli.js for example usage.'
        )
      }
      var a = npm.deref(c)
      if (c === 'la' || c === 'll') {
        npm.config.set('long', true)
      }

      npm.command = c
      if (commandCache[a]) return commandCache[a]

      var cmd = require(path.join(__dirname, a + '.js'))

      commandCache[a] = function () {
        var args = Array.prototype.slice.call(arguments, 0)
        if (typeof args[args.length - 1] !== 'function') {
          args.push(defaultCb)
        }
        if (args.length === 1) args.unshift([])

        // Options are prefixed by a hyphen-minus (-, \u2d).
        // Other dash-type chars look similar but are invalid.
        Array(args[0]).forEach(function (arg) {
          if (/^[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D]/.test(arg)) {
            log.error('arg', 'Argument starts with non-ascii dash, this is probably invalid:', arg)
          }
        })

        if (!registryRefer) {
          registryRefer = [a].concat(args[0]).map(function (arg) {
            // exclude anything that might be a URL, path, or private module
            // Those things will always have a slash in them somewhere
            if (arg && arg.match && arg.match(/\/|\\/)) {
              return '[REDACTED]'
            } else {
              return arg
            }
          }).filter(function (arg) {
            return arg && arg.match
          }).join(' ')
          npm.referer = registryRefer
        }

        cmd.apply(npm, args)
      }

      Object.keys(cmd).forEach(function (k) {
        commandCache[a][k] = cmd[k]
      })

      return commandCache[a]
    },
    enumerable: fullList.indexOf(c) !== -1,
    configurable: true })

    // make css-case commands callable via camelCase as well
    if (c.match(/-([a-z])/)) {
      addCommand(c.replace(/-([a-z])/g, function (a, b) {
        return b.toUpperCase()
      }))
    }
  })

  function defaultCb (er, data) {
    log.disableProgress()
    if (er) console.error(er.stack || er.message)
    else output(data)
  }

 