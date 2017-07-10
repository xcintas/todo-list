import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTodo } from 'Actions'

const mapStateToProps = (state) => ({
  todo: state.todo,
  isLoading: state.loader
})

const mapDispatchToProps = dispatch => {
  return {
    getTodo: id => {
      dispatch(getTodo(id))
    }
  }
}

class TodoDetails extends React.Component {
  componentDidMount() {
    this.props.getTodo(this.props.match.params.id)
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
            <Link to="/">Back to main page</Link>
           </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)