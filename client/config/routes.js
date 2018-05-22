import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    // props: (route) => ({ id: route.query.b }),
    component: Todo,
    name: 'app'
  },
  {
    path: '/login',
    component: Login,
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
