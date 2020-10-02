import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as signInActions from '../actions/actionsCreator/signInActionsCreator';
import * as signInActionsTypes from '../actions/actionsTypes/signInActionsTypes';
import * as services from '../../services/signin';

function* onSignIn({
	email,
	password,
}: signInActionsTypes.ISignInRequesAction) {
	try {
		const { token }: services.ISignInResponse = yield call(services.signin, {
			email,
			password,
		});
		yield put(signInActions.signInSuccess(token));
	} catch (error) {
		yield put(signInActions.signInError(error));
	}
}

function* watchOnSignIn() {
	yield takeLatest(signInActionsTypes.SIGN_IN_REQUEST, onSignIn);
}

export default function* signInSaga() {
	yield all([fork(watchOnSignIn)]);
}