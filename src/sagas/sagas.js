
import { call, put, takeEvery } from 'redux-saga/effects'
import { 
  addTodo as mockAddTodo, 
  deleteTodo as mockDeleteTodo,
  deleteTodos as mockDeleteTodos, 
  getTodos as mockGetTodos 
} from '../mocks/Todo'

function* addTodo(action) {
  try {
    const todo = yield call(mockAddTodo, action.text)
    yield put({type: "ADD_TODO_SUCCEEDED", todo: todo})
    yield* fetchTodos()
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

function* deleteTodo() {
  try {
    yield call(mockDeleteTodo)
    yield put({type: "TODO_DELETE_SUCCEEDED"})
    yield* fetchTodos()
  } catch (e) {
    yield put({type: "TODO_DELETE_FAILED"})
  }
}

function* deleteTodos() {
  try {
    yield call(mockDeleteTodos)
    yield put({type: "TODOS_DELETE_SUCCEEDED"})
    yield* fetchTodos()
  } catch (e) {
    yield put({type: "TODOS_DELETE_FAILED"})
  }
}

function* mySaga() {
  yield takeEvery("ADD_TODO", addTodo)
  yield takeEvery("DELETE_TODO", deleteTodo)
  yield takeEvery("DELETE_TODOS", deleteTodos)
  yield takeEvery("TODOS_FETCH_REQUESTED", fetchTodos)
}

export default mySaga