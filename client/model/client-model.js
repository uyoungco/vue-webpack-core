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
  getAllTodos () {
    return handleRequset(request.get('/api/todos'))
  },
  login (username, password) {
    return handleRequset(request.post('/user/login', {username, password}))
  }
}
