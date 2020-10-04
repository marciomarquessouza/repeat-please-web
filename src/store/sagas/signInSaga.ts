import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as signInActions from '../actions/actionsCreator/signInActionsCreator';
import * as signInActionsTypes from '../actions/actionsTypes/signInActionsTypes';
import * as alertActions from '../actions/actionsCreator/alertActionsCreator';
import { signIn } from '../../services/signInServices';
import history from '../../navigation/history';

function* onSignIn({
	email,
	password,
}: signInActionsTypes.ISignInRequesAction) {
	try {
		const { accessToken } = yield call(signIn, { email, password });

		if (accessToken) {
			history.push('/');
		} else {
			throw new Error('Error to access the system');
		}
		yield put(signInActions.signInSuccess());
	} catch (error) {
		yield put(signInActions.signInError());
		yield put(alertActions.alertShow(error.message, 'error'));
	}
}

function* watchOnSignIn() {
	yield takeLatest(signInActionsTypes.SIGN_IN_REQUEST, onSignIn);
}

export default function* signInSaga() {
	yield all([fork(watchOnSignIn)]);
}
