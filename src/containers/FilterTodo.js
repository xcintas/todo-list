import React from 'react'
import { connect } from 'react-redux'

import { visibilityFilter } from 'Actions'

let FilterTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      Filter
      <input onChange={e => {
        e.preventDefault()

        dispatch(visibilityFilter(e.target.value))
      }} />
    </div>
  )
}
FilterTodo = connect()(FilterTodo)

export default FilterTodo