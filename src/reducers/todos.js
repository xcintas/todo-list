import Immutable from 'immutable'
import { handleActions } from 'redux-actions'

const todos = handleActions({
  "TODOS_FETCH_SUCCEEDED": (state, action) => Immutable.List(action.todos)
}, [])

export default todos