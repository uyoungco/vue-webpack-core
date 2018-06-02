import model from '../../model/client-model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'

const handleError = (err) => {
  // handle err
  if (err.code === 401) {
    notify({
      content: '还没登录 o(╥﹏╥)o'
    })
    bus.$emit('auth')
  }
}

export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  addTodo ({ commit }, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '写个屁代码！ [○･｀Д´･ ○]'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  updateTodo ({ commit }, { id, todo }) {
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', { id, todo: data })
        notify({
          content: ' 更新成功！ V(＾－＾)V'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  deleteTodo ({ commit }, id) {
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        notify({
          content: '可以啊小伙子 [○･｀Д´･ ○]'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  deleteAllCompleted ({ commit, state }) {
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('deleteAllCompleted')
        notify({
          content: '清理一下 [○･｀Д´･ ○]'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: `欢迎回家${username}`
          })
          resolve()
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
