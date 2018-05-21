import Vue from 'vue'

const ChindCompoent = {
  template: '<div slot="header">chind coomponent</dvi>'
}

const compoent = {
  components: {
    ChindCompoent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
    <slot></slot>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: compoent
  },
  provide: {
    yeye: this
  },
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <comp-one ref="comp">
      <span >{{value}}</span>

    </comp-one>
  `
})

// template: '<comp-one :value="value" @input="value = arguments[0]"/>'
