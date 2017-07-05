let nextTodoId = 0
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

const requestTodos = () => {
  return {
    type: 'REQUEST_TODOS'
  }
}

const receiveTodos = (newTodos) => {
  return {
    type: 'RECEIVE_TODOS',
    todos: newTodos
  }
}

const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 0, text: "git pull" },
          { id: 1, text: "git status" },
          { id: 2, text: "git add ." },
          { id: 3, text: "git commit" },
          { id: 4, text: "git push" }
        ])
      }, 1500)
    })
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

export {addTodo, requestTodos, deleteTodo, deleteTodos, visibilityFilter}
