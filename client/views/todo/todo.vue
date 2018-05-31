<template>
  <section class="real-app">
     <div class="tab-container">
       <tabs :value="tabValue" @change="handleChangTab">
        <tab label="tab1" index="1"/>
        <tab index="2"><span slot="label" style="color: red;">tab2</span></tab>
        <tab label="tab3" index="3"/>
      </tabs>
     </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要去做什么"
      @keyup.enter = "addTodo"
    >
    <Item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <Helper
     :filter="filter"
     :todos="todos"
     @toggle="toggleFilter"
     @clearAllCompleted="clearAllCompleted"
    />
  </section>
</template>


<script>
import Item from './item.vue'
import Helper from './tabs.vue'
let id = 0

export default {
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo Update enter')
    // 可以在这里获取数据 不用watch
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo Leave enter')
    // if (global.confirm('are you sure?')) {
    //   next()
    // }
    next()
  },
  props: ['id'],
  mounted () {
    console.log('todo mounted ')
  },
  data () {
    return {
      todos: [],
      filter: 'all',
      tabValue: '1'
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    handleChangTab (value) {
      this.tabValue = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0px auto;
  box-shadow: 0px 0px 5px #666;
}

.add-input {
  positon: relative;
  margin: 0px;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4rem;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0px rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
}
.tab-container {
  background-color #fff;
  padding 0 15px
}
</style>
