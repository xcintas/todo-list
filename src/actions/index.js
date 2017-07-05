
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    text
  }
}

export const getTodos = () => {
  return {
    type: "TODOS_FETCH_REQUESTED"
  }
}

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  }
}

export const deleteTodos = () => {
  return {
    type: "DELETE_TODOS"
  }
}

export const visibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  }
}
