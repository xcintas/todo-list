import React, { Component } from 'react'

import AddTodo from '../containers/AddTodo'
import FilterTodo from '../containers/FilterTodo'
import DeleteTodos from '../containers/DeleteTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="TodoApp">
        <h1>Make your todo list!</h1>
        <AddTodo />
        <FilterTodo />
        <VisibleTodoList />
        <DeleteTodos />
      </div>
    );
  }
}

export default App;
