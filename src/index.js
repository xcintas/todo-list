import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from './store'
import Home from './components/Home'
import TodoDetails from './components/TodoDetails'

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route name="TodoDetails" path="/todo/:id" component={TodoDetails} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)