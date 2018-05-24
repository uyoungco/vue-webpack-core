import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  // console.log('before each invoked')
  // if (to.fullPath === '/login') {
  //   next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before Resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after Each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
