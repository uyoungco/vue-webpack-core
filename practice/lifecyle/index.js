import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{test}}</div>',
  data: {
    test: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate') // 组件初始化
  },
  created () {
    console.log(this.$el, 'created') // 组件初始化
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount') // 挂在节点 找到ID
  },
  mounted () {
    console.log(this.$el, 'mounted') // 开始渲染
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate') // 即将更新
  },
  updated () {
    console.log(this, 'updated') // 已经更新
  },
  activated () {
    console.log(this, 'activated') // 组件章节在去讲解
  },
  deactivated () {
    console.log(this, 'deactivated') // 组件章节在去讲解
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy') // 即将被销毁
  },
  destroyed () {
    console.log(this, 'destroyed') // 已经被销毁
  },
  render (h) {
    throw new TypeError('render error')
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡
  }
})

app.$mount('#root')
// setInterval(() => {
//   app.test += 1
// }, 1000)

// 销毁
// setTimeout(() => {
//   app.$destroy()
// }, 1000)
