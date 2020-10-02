import * as actions from '../actionsTypes/signInActionsTypes';

export const signInRequest = (
	email: string,
	password: string,
): actions.ISignInRequesAction => ({
	type: actions.SIGN_IN_REQUEST,
	email,
	password,
});

export const signInSuccess = (token: string): actions.ISignInSuccessAction => ({
	type: actions.SIGN_IN_SUCCESS,
	token,
});

export const signInError = (error: Error): actions.ISignInErrorAction => ({
	type: actions.SIGN_IN_ERROR,
	error,
});
