import { connect } from 'react-redux'

import { visibilityFilter } from 'Actions'

const FilterTodo = ( props ) => (
  <div>
    Filter
    <input onChange={props.onChange}/>
  </div> 
)

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      e.preventDefault()
      dispatch(visibilityFilter(e.target.value))
    }
  }
}

export default connect(state => ({}), mapDispatchToProps)(FilterTodo)