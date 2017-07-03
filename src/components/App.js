import React, { Component } from 'react'

import AddTodo from '../containers/AddTodo'
import RemoveTodos from '../containers/RemoveTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="TodoApp">
        <h1>Make your todo list!</h1>
        <AddTodo />
        <VisibleTodoList />
        <RemoveTodos />
      </div>
    );
  }
}

export default App;
