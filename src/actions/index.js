let nextTodoId = 0
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

const filterTodo = text => {
  return {
    type: 'FILTER_TODO',
    text
  }
}

const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

const deleteTodos = () => {
  return {
    type: 'DELETE_TODOS'
  }
}

export {addTodo, filterTodo, deleteTodo, deleteTodos}
