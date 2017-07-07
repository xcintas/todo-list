import React from 'react'
import { connect } from 'react-redux'

import { deleteTodos } from 'Actions'

let DeleteTodos = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(deleteTodos())
      }}>
        <button type="submit">
          Delete Todos
        </button>
      </form>
    </div>
  )
}
DeleteTodos = connect()(DeleteTodos)

export default DeleteTodos