import React from 'react'
import { connect } from 'react-redux'

import { removeTodos } from '../actions'

let RemoveTodos = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(removeTodos())
      }}>
        <button type="submit">
          Remove Todos
        </button>
      </form>
    </div>
  )
}
RemoveTodos = connect()(RemoveTodos)

export default RemoveTodos