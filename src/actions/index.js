let nextTodoId = 0
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

const removeTodos = () => {
  return {
    type: 'REMOVE_TODOS'
  }
}

export {addTodo, removeTodos}
