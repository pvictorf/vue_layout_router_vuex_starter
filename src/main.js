import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import DefaultLayout from '@/layouts/Default.vue'
import BlankLayout from '@/layouts/Blank.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('blank-layout', BlankLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
