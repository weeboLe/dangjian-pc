not declared in func params"));
          } // Replace the Identifer node by our new NumberLiteral node


          instrNode.args[0] = numberLiteralFromRaw(offsetInParams);
        }
      }
      /**
       * Global access
       */


      if (instrNode.id === "get_global" || instrNode.id === "set_global") {
        var _instrNode$args2 = _slicedToArray(instrNode.args, 1),
            _firstArg = _instrNode$args2[0];

        if (isIdentifier(_firstArg) === true) {
          var globalOffset = moduleContext.getGlobalOffsetByIdentifier( // $FlowIgnore: reference?
          _firstArg.value);

          if (typeof globalOffset === "undefined") {
            // $FlowIgnore: reference?
            throw new Error("global ".concat(_firstArg.value, " not found in module"));
          } // Replace the Identifer node by our new NumberLiteral node


          instrNode.args[0] = numberLiteralFromRaw(globalOffset);
        }
      }
      /**
       * Labels lookup
       */


      if (instrNode.id === "br") {
        var _instrNode$args3 = _slicedToArray(instrNode.args, 1),
            _firstArg2 = _instrNode$args3[0];

        if (isIdentifier(_firstArg2) === true) {
          // if the labels is no