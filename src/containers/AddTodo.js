import { connect } from 'react-redux'

import Add from 'Components/Add'
import { addTodo } from 'Actions'

const AddTodo = (props) => (
    <Add onSubmit={props.onSubmit} />
)

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (e, input) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      
      dispatch(addTodo(input.value))
      input.value = ''
    }
  }
}

export default connect(state => ({}), mapDispatchToProps)(AddTodo)