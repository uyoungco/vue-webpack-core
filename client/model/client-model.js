import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequset = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      if (resp.status === 401) {
        reject(createError(401, 'need auth'))
      }
    })
  })
}

export default {
  getAllTodos () { // 查询所有
    return handleRequset(request.get('/api/todos'))
  },
  login (username, password) { // 登录
    return handleRequset(request.post('/user/login', {username, password}))
  },
  updateTodo (id, todo) { // 更新状态
    return handleRequset(request.put(`/api/todo/${id}`, todo))
  },
  createTodo (todo) { // 创建新的Todo
    return handleRequset(request.post('/api/todo', todo))
  },
  deleteTodo (id) { // 删除Todo
    return handleRequset(request.delete(`/api/todo/${id}`))
  },
  deleteAllCompleted (ids) { // 批量删除
    return handleRequset(request.post('/api/delete/completed', { ids }))
  }
}
