import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()

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
  render: (h) => h(App)
}).$mount('#root')
