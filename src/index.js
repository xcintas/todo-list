import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { store } from './store'
import Home from './components/Home'
import TodoDetails from './components/TodoDetails'

//const action = type => store.dispatch({type})

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route name="TodoDetails" path="/todo/:id" component={TodoDetails} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)