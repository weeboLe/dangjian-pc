// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import 'babel-polyfill'
import Highcharts from 'highcharts';//highcharts的引入
import store from './store';// 状态管理

import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Highcharts);
// Vue.use(Message);
Vue.prototype.$message = Message;

Vue.config.productionTip = false
// Vue.prototype.HOST = '/dangjian_api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render(h) {
    return h(App)
  }
})

