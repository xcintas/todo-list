import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  return todos.filter(todo => !todo.text.indexOf(filter))
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList