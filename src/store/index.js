import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import appSaga from 'Sagas'
import reducer from 'Reducers'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(appSaga)

export { store, sagaMiddleware }