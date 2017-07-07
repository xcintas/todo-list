import { connect } from 'react-redux'

import Delete from 'Components/Delete'
import { deleteTodos } from 'Actions'

let DeleteTodos = ({ dispatch }) => {
  let onSubmit = ((e) => {
    e.preventDefault()
    dispatch(deleteTodos())
  })

  return (
    <Delete onSubmit={onSubmit} />
  )
}
DeleteTodos = connect()(DeleteTodos)

export default DeleteTodos