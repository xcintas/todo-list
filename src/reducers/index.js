import { combineReducers } from 'redux'

import todos from './todos'
import loader from './loader'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  loader,
  visibilityFilter
})