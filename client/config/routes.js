// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    props: true,
    // props: (route) => ({ id: route.query.b }),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    beforeEnter (to, from, next) {
      console.log('app route')
      next()
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue'),
    name: 'login',
    meta: {
      title: 'this is app',
      description: 'asad'
    }
    // cildren: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  }
]
