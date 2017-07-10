import { handleActions } from 'redux-actions'

const todo = handleActions({
  "GET_TODO_SUCCEEDED": (state, action) => action.todo
}, {})

export default todo