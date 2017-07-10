import { connect } from 'react-redux'

import { visibilityFilter } from 'Actions'

let FilterTodo = ({ dispatch }) => {
  let onChange = ((e) => {
    e.preventDefault()

    dispatch(visibilityFilter(e.target.value))
  })

  return (
    <div>
      Filter
      <input onChange={onChange}/>
    </div>
  )
}
FilterTodo = connect()(FilterTodo)

export default FilterTodo