import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div
      :class="[ isActive ? 'active' : '']"
      :style="styles"
    >
      <p>{{getJoinedArr (arr)}}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    }
  },
  methods: {
    handleClick () {
      console.log('绑定事件')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
