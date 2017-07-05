import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mySaga from '../sagas/sagas'
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export { store, sagaMiddleware }