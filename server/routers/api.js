const Router = require('koa-router')

const apiRoutrt = new Router({ prefix: '/api' })

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRoutrt.get('/todo', async (ctx) => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})

module.exports = apiRoutrt
