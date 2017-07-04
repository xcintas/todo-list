import Immutable from 'immutable'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return Immutable.List(state).push({
        id: action.id,
        text: action.text,
        completed: false
      })
    }
    case 'DELETE_TODO': {
      return Immutable.List(state).filter(todo => todo.id !== action.id)
    }
    case 'DELETE_TODOS': {
      return [];
    }
    default:
      return Immutable.List(state);
  }
}

export default todos;