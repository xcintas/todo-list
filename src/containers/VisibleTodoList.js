import { connect } from 'react-redux'

import TodoList from 'Components/TodoList'

const getVisibleTodos = (todos, filter) => {
  return todos.filter(todo => todo.text.includes(filter))
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  isLoading: state.loader
})

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList