import Vue from 'vue'

const compoent = {
  name: 'uyoung',
  props: {
    active: Boolean,
    proOne: String
  },
  template: `
    <div>
      <input type="text" v-model="proOne">
      <span @click="handleChange">{{proOne}}</span>
      <span>{{text}}</span>
    </div>
  `,
  data () {
    return {
      text: '1233'
    }
  },
  methods: {
    handleChange () {
      this.$emit('Change')
    }
  }

}
const compoent2 = {
  extends: compoent, // 我们开发了一个组件功能比较完善了但是又需要有其他的需求或者默认值来设置
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent)
  }
}

new Vue({
  name: 'Root',
  el: '#root',
  components: {
    Comp: compoent2
  },
  propsData: {
    proOne: 'xxx'
  },
  template: '<Comp />'
})

// const CompVue = Vue.extend(compoent)
// new CompVue({
//   el: '#root',
//   propsData: {
//     proOne: 'xxx'
//   }
// })
