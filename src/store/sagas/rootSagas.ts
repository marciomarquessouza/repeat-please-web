import { all, fork } from 'redux-saga/effects';
import signInSaga from './signInSaga';

export default function* rootSaga() {
	yield all([fork(signInSaga)]);
}
