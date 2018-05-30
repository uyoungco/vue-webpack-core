<template>
  <transition name="fade">
    <div
      class="notification"
    >
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault() // 阻止默认事件
      this.$emit('close')
    }
  }
}
</script>


<style lang="stylus" scoped>
.notification
  display flex
  background-color #303030
  color #fff
  align-items center
  padding 20px 
  position fixed
  min-width 280px
  box-shadow 0 3px 5px -1px rgba(0, 0, 0, 0.2),0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12)
  flex-wrap wrap
  transition all .3s
.content
  padding 0
.btn
  color #ff4081
  padding-left 24px
  margin-left auto
  cursor pointer
</style>
