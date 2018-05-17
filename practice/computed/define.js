import Vue from 'vue'

const compoent = {
  props: {
    active: {
      type: Boolean,
      // required: true,
      defaulet: true
    },
    proOne: String
  },
  template: `
    <div>
      <input type="text" v-model="proOne">
      <span @click="handleChange">{{proOne}}</span>
      <span v-show="active">active</span>
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

// Vue.component('CompOne', compoent)

new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 'prop111'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
  <div>
    <comp-one ref="comp1" :active="true" :pro-one="prop1" @Change="handleChange"/>
    <comp-one  pro-one="dier" />
  </div>
  `
})
