import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import DefaultLayout from '@/layouts/Default.vue'
import BlankLayout from '@/layouts/Blank.vue'


import { NavBar } from 'vant'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueSidebarMenu)
Vue.use(NavBar)

Vue.component('default-layout', DefaultLayout)
Vue.component('blank-layout', BlankLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
