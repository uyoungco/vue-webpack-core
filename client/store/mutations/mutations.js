export default {
  updateCount (state, {num, num2}) {
    // console.log(num2)
    state.count = num
  },
  fillTodos (state, todos) {
    state.todos = todos
  }
}
