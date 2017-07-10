import { getTodo } from 'Actions'

class TodoDetails extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getTodo(this.props.match.params.id))
  }

  render() {
    return <div>
            <h1>Todo details</h1>
           </div>
  }
}

export default TodoDetails