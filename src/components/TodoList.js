import React, { Component } from 'react'

import Todo from './Todo'

class TodoList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({type: "TODOS_FETCH_REQUESTED"})
  }

  render() {
    return <ul>
            {this.props.todos.map(todo =>
              <Todo key={todo.id} todo={todo} />
            )}
          </ul>
  }
}

export default TodoList;
