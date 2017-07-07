import { connect } from 'react-redux'

import Add from 'Components/Add'
import { addTodo } from 'Actions'

let AddTodo = ({ dispatch }) => {
  let onSubmit = (e, input) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <Add onSubmit={onSubmit} />
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo