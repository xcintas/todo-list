import { connect } from 'react-redux'

import Delete from 'Components/Delete'
import { deleteTodos } from 'Actions'

const DeleteTodos = ( props ) => (
    <Delete onSubmit={props.onSubmit} />
)

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault()
      dispatch(deleteTodos())
    }
  }
}

export default connect(state => ({}), mapDispatchToProps)(DeleteTodos)