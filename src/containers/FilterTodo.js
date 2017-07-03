import React from 'react'
import { connect } from 'react-redux'

import { visibilityFilter } from '../actions'

let FilterTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      Filter text:
      <input onChange={e => {
        e.preventDefault()

        dispatch(visibilityFilter(e.target.value))
      }} />
    </div>
  )
}
FilterTodo = connect()(FilterTodo)

export default FilterTodo