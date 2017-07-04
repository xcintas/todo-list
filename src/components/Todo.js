import React from 'react'
import { connect } from 'react-redux'

import { deleteTodo } from '../actions'

let Todo = ({ dispatch, todo }) => (
  <li>
    {todo.text} <a onClick={ e => {
        dispatch(deleteTodo(todo.id))
        }}>delete</a>
    </li>
)
Todo = connect()(Todo)

export default Todo;
