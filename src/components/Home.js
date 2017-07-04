import React from 'react'

import AddTodo from '../containers/AddTodo'
import FilterTodo from '../containers/FilterTodo'
import DeleteTodos from '../containers/DeleteTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

let Home = () => (
  <div>
    <h1>Make your todo list!</h1>
    <AddTodo />
    <FilterTodo />
    <VisibleTodoList />
    <DeleteTodos />
  </div>
)

export default Home;
