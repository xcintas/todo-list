import React from 'react';
import { connect } from 'react-redux'

import { deleteTodo } from '../actions'

let TodoList = ({ dispatch, todos }) => (
  <ul>
    {todos.map(todo =>
      <li key={todo.id}>
        {todo.text} <a onClick={ e => {
          dispatch(deleteTodo(todo.id))
          }}>delete</a>
      </li>
    )}
  </ul>
)
TodoList = connect()(TodoList)

export default TodoList;
