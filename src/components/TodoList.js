import Todo from './Todo'
import { getTodos } from 'Actions'

class TodoList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getTodos())
  }

  render() {
    return <div>
            <ul style={this.props.isLoading ? { opacity: 0.2 }: { opacity: 1 }}>
              {this.props.todos.map(todo =>
                <Todo key={todo.id} todo={todo} />
              )}
            </ul>
          </div>
  }
}

export default TodoList;
