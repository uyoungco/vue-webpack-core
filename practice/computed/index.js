import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{ name }}</p>
      <p>Name: {{ getName() }}</p>
      <p>number: {{ number }}</p>
      <p>FillName: {{ fullName }}</p>
      <p><input type="text" v-model="number"></p>
      <p>firstName<input type="text" v-model="firstName"></p>
      <p>lastName<input type="text" v-model="lastName"></p>
      <p>Name<input type="text" v-model="name"></p>
      <p>Obj.a<input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    number: 0,
    fullName: ' ',
    obj: {
      a: 0
    }
  },
  computed: {
    // 组件渲染 计算 缓存
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  mounted () {
    this.obj = {
      a: '345'
    }
  },
  watch: {
    // 绑定时候不会执行 变化后再执行
    // 比如监听到某个值的变化 给后台发请求
    // 监听到某一个值的变化 做某一个事情
    'obj.a': {
      handler () {
        console.log('obj.a changed')
        this.obj.a += 1
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    // 数据更新更 实时更新
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
