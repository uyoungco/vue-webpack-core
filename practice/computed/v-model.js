import Vue from 'vue'

const compoent = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" :value="value1" @input="handleInput">

    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  name: 'Root',
  el: '#root',
  components: {
    CompOne: compoent
  },
  data () {
    return {
      value: '123'
    }
  },
  template: '<comp-one v-model="value" />'
})

// template: '<comp-one :value="value" @input="value = arguments[0]"/>'
