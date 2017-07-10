import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Delete from 'Components/Delete'
import { getTodo, deleteTodo } from 'Actions'

const mapStateToProps = (state) => ({
  todo: state.todo,
  isLoading: state.loader
})

const mapDispatchToProps = dispatch => {
  return {
    getTodo: id => {
      dispatch(getTodo(id))
    },
    onDelete: id => {
      dispatch(deleteTodo(id, true))
    }
  }
}

class TodoDetails extends React.Component {
  componentDidMount() {
    this.props.getTodo(parseInt(this.props.match.params.id))
  }

  render() {
    let todoContent = null
    if(this.props.isLoading) {
      todoContent = 'Loading ...'
    } else {
      todoContent = this.props.todo.text
    }

    return <div>
            <h1>Todo details</h1>
            {todoContent}
            <br/>
            <br/>
            <Delete onSubmit={e => {
              e.preventDefault()
              this.props.onDelete(this.props.todo.id)
            }}/>
            <Link to="/">Back to main page</Link>
           </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)