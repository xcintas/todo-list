import React from 'react'

import Todo from './Todo'

let TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id} todo={todo} />
    )}
  </ul>
)

export default TodoList;
