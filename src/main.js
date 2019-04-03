// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import './assets/baseCss.css'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
import bus from './assets/bus.js'
import store from './store'
import vuex from 'vuex'
Vue.use(Mint);
Vue.use(vuex);

Vue.config.productionTip = false
axios.defaults.baseURL = " http://localhost:3000";

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
