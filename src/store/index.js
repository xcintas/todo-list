import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import appSaga from 'Sagas'
import reducer from 'Reducers'

const history = createHistory()

const middleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, middleware)
)

sagaMiddleware.run(appSaga)

export { store, sagaMiddleware, history }