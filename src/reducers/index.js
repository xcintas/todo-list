import { combineReducers } from 'redux'

import todo from './todo'
import todos from './todos'
import loader from './loader'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todo,
  todos,
  loader,
  visibilityFilter
})