import { combineReducers } from 'redux'

import todo from './todo'
import todos from './todos'
import loader from './loader'
import visibilityFilter from './visibilityFilter'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  todo,
  todos,
  loader,
  visibilityFilter,
  router: routerReducer
})