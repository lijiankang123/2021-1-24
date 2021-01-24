import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'
import store from './store'
import axios from 'axios'
import moment from 'moment'

axios.defaults.baseURL='http://127.0.0.1:3000';
Vue.prototype.axios=axios;
Vue.config.productionTip = false;
Vue.prototype.qs = qs;
Vue.prototype.moment = moment;

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.min.css'

Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
