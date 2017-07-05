import Immutable from 'immutable'

const todos = (state = [], action) => {
  switch (action.type) {
    case "TODOS_FETCH_SUCCEEDED": {
      return Immutable.List(action.todos)
    }
    default:
      return Immutable.List(state)
  }
}

export default todos