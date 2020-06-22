import { put, takeLatest, all } from 'redux-saga/effects';

function* dummy() {
  yield console.log('BOOM')
}

function* actionWatcher() {
  yield takeLatest('todos/addTodo', dummy)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
