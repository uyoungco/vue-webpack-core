import Vue from 'vue'

const ChindCompoent = {
  template: '<div>chind coomponent</dvi>'
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
      <slot value="456"></slot>
      <ChindCompoent />
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
      <span slot-scope="props" ref="span">{{props.value}}</span>

    </comp-one>
  `
})

// template: '<comp-one :value="value" @input="value = arguments[0]"/>'
