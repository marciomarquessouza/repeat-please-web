import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as signUpActions from '../actions/actionsCreator/signUpActionsCreator';
import * as signUpActionsTypes from '../actions/actionsTypes/signUpActionsTypes';
import * as alertActions from '../actions/actionsCreator/alertActionsCreator';
import { signUp } from '../../services/signUpServices';
import history from '../../navigation/history';
import { SIGN_IN } from '../../navigation/routes';

function* onSignUp({
	email,
	password,
	name,
}: signUpActionsTypes.ISignUpRequestAction) {
	try {
		const { id } = yield call(signUp, { email, password, name });
		yield put(alertActions.alertShow('signUpSuccess', 'success'));

		if (id) {
			history.push(SIGN_IN);
		} else {
			throw new Error('signUpError');
		}
		yield put(signUpActions.signUpSuccess());
	} catch (error) {
		yield put(signUpActions.signUpError());
		yield put(alertActions.alertShow('signUpError', 'error'));
	}
}

function* watchOnSignUp() {
	yield takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, onSignUp);
}

export default function* signUpSaga() {
	yield all([fork(watchOnSignUp)]);
}
