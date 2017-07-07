import Immutable from 'immutable'

const loader = (state = false, action) => {
  switch (action.type) {
    case "FETCH_STARTED": {
      return true
    }
    case "FETCH_FINISHED": {
      return false
    }
    default:
      return state
  }
}

export default loader