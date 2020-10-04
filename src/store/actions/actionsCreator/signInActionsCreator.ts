import * as actions from '../actionsTypes/signInActionsTypes';

export const signInRequest = (
	email: string,
	password: string,
): actions.ISignInRequesAction => ({
	type: actions.SIGN_IN_REQUEST,
	email,
	password,
});

export const signInSuccess = (): actions.ISignInSuccessAction => ({
	type: actions.SIGN_IN_SUCCESS,
});

export const signInError = (): actions.ISignInErrorAction => ({
	type: actions.SIGN_IN_ERROR,
});
