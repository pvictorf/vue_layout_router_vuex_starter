import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import 'material-icons/iconfont/material-icons.css';


import DefaultLayout from '@/layouts/Default.vue'
import BlankLayout from '@/layouts/Blank.vue'


Vue.component('default-layout', DefaultLayout)
Vue.component('blank-layout', BlankLayout)

Vue.use(Vuesax, {})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
