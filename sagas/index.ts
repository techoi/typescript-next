import { all, fork } from 'redux-saga/effects';

import counter from './counter';
export default function* rootSaga() {
    yield all([
        fork(counter),
    ]);
}
