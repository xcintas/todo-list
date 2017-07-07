import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import appSaga from '../sagas/sagas'
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(appSaga)

export { store, sagaMiddleware }