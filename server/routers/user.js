const Router = require('koa-router')

const userRoutrt = new Router({ prefix: '/user' })

userRoutrt.post('/login', async (ctx) => {
  const user = ctx.request.body
  if (user.username === 'uyoung' && user.password === 'uyoung') {
    ctx.session.user = {
      username: 'uyoung'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'uyoung'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRoutrt
