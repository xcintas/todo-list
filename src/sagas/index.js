
import { call, put, takeEvery } from 'redux-saga/effects'
import { 
  addTodo as mockAddTodo, 
  deleteTodo as mockDeleteTodo,
  deleteTodos as mockDeleteTodos, 
  getTodos as mockGetTodos 
} from '../mocks/Todo'

function* addTodo(action) {
  try {
    yield put({type: "FETCH_STARTED"})
    const todo = yield call(mockAddTodo, action.payload.text)
    yield put({type: "ADD_TODO_SUCCEEDED", todo: todo})
    yield* fetchTodos()
    yield put({type: "FETCH_FINISHED"})
  } catch (e) {
    yield put({type: "ADD_TODO_FAILED"})
  }
}

function* fetchTodos() {
  try {
    const todos = yield call(mockGetTodos)
    yield put({type: "TODOS_FETCH_SUCCEEDED", todos: todos})
  } catch (e) {
    yield put({type: "TODOS_FETCH_FAILED"})
  }
}

function* deleteTodo(action) {
  try {
    yield put({type: "FETCH_STARTED"})
    yield call(mockDeleteTodo, action.payload.id)
    yield put({type: "TODO_DELETE_SUCCEEDED"})
    yield* fetchTodos()
    yield put({type: "FETCH_FINISHED"})
  } catch (e) {
    yield put({type: "TODO_DELETE_FAILED"})
  }
}

function* deleteTodos() {
  try {
    yield put({type: "FETCH_STARTED"})
    yield call(mockDeleteTodos)
    yield put({type: "TODOS_DELETE_SUCCEEDED"})
    yield* fetchTodos()
    yield put({type: "FETCH_FINISHED"})
  } catch (e) {
    yield put({type: "TODOS_DELETE_FAILED"})
  }
}

function* appSaga() {
  yield takeEvery("ADD_TODO", addTodo)
  yield takeEvery("DELETE_TODO", deleteTodo)
  yield takeEvery("DELETE_TODOS", deleteTodos)
  yield takeEvery("TODOS_FETCH_REQUESTED", fetchTodos)
}

export default appSaga