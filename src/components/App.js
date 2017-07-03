import React, { Component } from 'react'

import AddTodo from '../containers/AddTodo'
import DeleteTodos from '../containers/DeleteTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="TodoApp">
        <h1>Make your todo list!</h1>
        <AddTodo />
        <VisibleTodoList />
        <DeleteTodos />
      </div>
    );
  }
}

export default App;
