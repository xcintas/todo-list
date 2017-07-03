import React from 'react'
import { connect } from 'react-redux'

import { filterTodo } from '../actions'

let FilterTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      Filter text:
      <input onChange={e => {
        e.preventDefault()

        dispatch(filterTodo(e.target.value))
      }} />
    </div>
  )
}
FilterTodo = connect()(FilterTodo)

export default FilterTodo