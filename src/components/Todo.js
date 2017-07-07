import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteTodo } from 'Actions'

let Todo = ({ dispatch, todo }) => (
  <li>
    <Link to={`/todo/${todo.id}`}>{todo.text}</Link>&nbsp;
    <a onClick={ e => {
        dispatch(deleteTodo(todo.id))
    }}>delete</a>
  </li>
)
Todo = connect()(Todo)

export default Todo;
