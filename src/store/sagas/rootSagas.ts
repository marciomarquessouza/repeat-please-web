import { all, fork } from 'redux-saga/effects';
import signInSaga from './signInSaga';
import signUpSaga from './signUpSaga';

export default function* rootSaga() {
	yield all([fork(signInSaga), fork(signUpSaga)]);
}
