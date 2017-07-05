import { combineReducers } from 'redux'

import todos from './todos'
import loader from './loader'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  loader,
  visibilityFilter
})

export default todoApp;