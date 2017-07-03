import React, { Component } from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <Todo 
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

export default TodoList;
