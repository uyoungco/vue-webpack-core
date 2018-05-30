import Vue from 'vue'
import Component from './func-notification'

const NotificationCoustructor = Vue.extend(Component)

const instances = []
let seed = 1

const notify = (options) => {
  if (Vue.prototype.$isServer) return

  const {
    autoClose,
    ...rest
  } = options
  const instance = new NotificationCoustructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance.vm
}

export default notify
