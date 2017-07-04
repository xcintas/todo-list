import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import TodoDetails from './components/TodoDetails'
import reducer from './reducers'

const store = createStore(reducer);

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