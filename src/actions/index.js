let nextTodoId = 0
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
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

const visibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export {addTodo, deleteTodo, deleteTodos, visibilityFilter}
