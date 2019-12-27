// import { delay } from "redux-saga";
import { takeEvery, put, all, fork } from "redux-saga/effects";
import * as actions from '../reducers/counter';

function* increaseBy() {
//   yield delay(4000);
  yield put({ type: actions.INCREASE_BY_SUCCESS, payload: 30 });
}

function* watchGetData() {
    yield takeEvery(actions.INCREASE_BY, increaseBy);
}

export default function* counterSaga() {
    yield all([
        fork(watchGetData),
    ]);
}