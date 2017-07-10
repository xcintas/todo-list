import AddTodo from 'Containers/AddTodo'
import FilterTodo from 'Containers/FilterTodo'
import DeleteTodos from 'Containers/DeleteTodos'
import VisibleTodoList from 'Containers/VisibleTodoList'

class Home extends React.Component {
  render() {
    return <div>
              <h1>Make your todo list!</h1>
              <AddTodo />
              <FilterTodo />
              <VisibleTodoList />
              <DeleteTodos />
            </div>
  }
}

export default Home;
