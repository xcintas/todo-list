
import { call, put, takeEvery } from 'redux-saga/effects'
import { addTodo, deleteTodo, deleteTodos, getTodo, getTodos } from '../mocks/Todo'
import { push } from 'react-router-redux'

function* fetchTodosSaga() {
  try {
    const todos = yield call(getTodos)
    yield put({type: "TODOS_FETCH_SUCCEEDED", todos: todos})
  } catch (e) {
    yield put({type: "TODOS_FETCH_FAILED"})
  }
}

function* addTodoSaga(action) {
  try {
    yield put({type: "FETCH_STARTED"})
    const todo = yield call(addTodo, action.payload.text)
    yield put({type: "ADD_TODO_SUCCEEDED", todo: todo})
    yield call(fetchTodosSaga)
    yield put({type: "FETCH_FINISHED"})
  } catch (e) {
    yield put({type: "ADD_TODO_FAILED"})
  }
}

function* getTodoSaga(action) {
  try {
    yield put({type: "FETCH_STARTED"})
    const todo = yield call(getTodo, action.payload.id)
    yield put({type: "GET_TODO_SUCCEEDED", todo: todo})
    yield put({type: "FETCH_FINISHED"})
  } catch (e) {
    yield put({type: "GET_TODO_FAILED"})
  }
}

function* deleteTodoSaga(action) {
  try {
    yield put({type: "FETCH_STARTED"})
    yield call(deleteTodo, action.payload.id)
    yield put({type: "TODO_DELETE_SUCCEEDED"})
    yield call(fetchTodosSaga)
    yield put({type: "FETCH_FINISHED"})

    if (action.payload.shouldRedirect) {
      yield put(push('/'))
    }
  } catch (e) {
    yield put({type: "TODO_DELETE_FAILED"})
  }
}

function* deleteTodosSaga() {
  try {
    yield put({type: "FETCH_STARTED"})
    yield call(deleteTodos)
    yield put({type: "TODOS_DELETE_SUCCEEDED"})
    yield call(fetchTodosSaga)
    yield put({type: "FETCH_FINISHED"})
  } catch (e) {
    yield put({type: "TODOS_DELETE_FAILED"})
  }
}

function* appSaga() {
  yield takeEvery("ADD_TODO", addTodoSaga)
  yield takeEvery("GET_TODO", getTodoSaga)
  yield takeEvery("DELETE_TODO", deleteTodoSaga)
  yield takeEvery("DELETE_TODOS", deleteTodosSaga)
  yield takeEvery("TODOS_FETCH_REQUESTED", fetchTodosSaga)
}

export default appSaga