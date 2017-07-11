import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from 'Store'
import Home from 'Containers/Home'
import TodoDetails from 'Containers/TodoDetails'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/todo/:id" component={TodoDetails} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)