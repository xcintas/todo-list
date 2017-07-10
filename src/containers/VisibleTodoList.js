import { connect } from 'react-redux'

import { getTodos, deleteTodo, visibilityFilter } from 'Actions'
import TodoList from 'Components/TodoList'

const getVisibleTodos = (todos, filter) => {
  return todos.filter(todo => todo.text.includes(filter))
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  isLoading: state.loader
})

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => {
      dispatch(visibilityFilter(''))
      dispatch(getTodos())
    },
    onTodoDelete: todoId => {
      dispatch(deleteTodo(todoId))
    }
  }
}

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return <TodoList todos={this.props.todos} isLoading={this.props.isLoading} onTodoDelete={this.props.onTodoDelete}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)