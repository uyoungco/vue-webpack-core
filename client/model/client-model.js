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
      if (!data.message) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    })
  })
}

export default {
  getAllTodos () {
    return handleRequset(request.get('/api/todos'))
  }
}
