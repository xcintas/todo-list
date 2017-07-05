import React, { Component } from 'react'

import Todo from './Todo'
import { getTodos } from '../actions'

class TodoList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getTodos())
  }

  render() {
    return <div>
            <ul style={this.props.isLoading ? { opacity: 0.2 }: { opacity: 1 }}>
              {this.props.todos.map(todo =>
                <Todo key={todo.id} todo={todo} />
              )}
            </ul>
          </div>
  }
}

export default TodoList;
