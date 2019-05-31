// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import '../static/baseCss.css'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
import bus from '../static/bus.js'
import store from './store'
import vuex from 'vuex'



Vue.use(Mint);
Vue.use(vuex);


Vue.config.productionTip = false;
axios.defaults.baseURL = " http://localhost:3000";


Vue.use(Mint, {
  preLoad: 1.3,
  error: './assets/img/wyy.png',
  loading: './assets/img/wyy.png',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

import { Indicator } from 'mint-ui';
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  Indicator.open({
    text: '',
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    Indicator.close();
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


//过滤器
//
Vue.filter('integer', function (value) {
  let val = value.toString();
  if(val.length <=5){
    return value
  }else {
    if(val>6){
      return val.substring(0,2)+'万'

    }else {
      return val.substring(0,3)+'万';

    }

  }
})

//时间秒转分
Vue.filter('time', function (value) {
  var h;
  h  =   Math.floor(value/60);
  value  =   value%60;
  h    +=    '';
  value    +=    '';
  h  =   (h.length==1)?'0'+h:h;
  value  =  (value.length==1)?'0'+Math.floor(Number(value)):Math.floor(Number(value));

  return h+':'+value;
})


Vue.prototype.$axios = axios;
Vue.prototype.$bus = bus;






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
