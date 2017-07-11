import { createAction, createActions } from 'redux-actions'

export const addTodo = createAction('ADD_TODO', text => ({ text }))
export const getTodo = createAction('GET_TODO', id => ({ id }))
export const getTodos = createAction('TODOS_FETCH_REQUESTED')
export const deleteTodo = createAction('DELETE_TODO', (id, shouldRedirect = false) => ({ id, shouldRedirect }))
export const deleteTodos = createAction('DELETE_TODOS')
export const visibilityFilter = createAction('SET_VISIBILITY_FILTER', filter => ({ filter }))