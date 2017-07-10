import Immutable from 'immutable'
import { handleActions } from 'redux-actions'

const loader = handleActions({
  "FETCH_STARTED": (state, action) => true,
  "FETCH_FINISHED": (state, action) => false
}, false)

export default loader