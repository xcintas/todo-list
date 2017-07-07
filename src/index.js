import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from 'Store'
import Home from 'Components/Home'
import TodoDetails from 'Components/TodoDetails'

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