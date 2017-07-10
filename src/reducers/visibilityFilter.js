import { handleActions } from 'redux-actions'

const visibilityFilter = handleActions({
  "SET_VISIBILITY_FILTER": (state, action) => action.payload.filter
}, '')

export default visibilityFilter