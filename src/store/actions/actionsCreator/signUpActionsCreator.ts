import * as actions from '../actionsTypes/signUpActionsTypes';

export const signUpRequest = (
	email: string,
	password: string,
	name: string,
): actions.ISignUpRequestAction => ({
	type: actions.SIGN_UP_REQUEST,
	email,
	password,
	name,
});

export const signUpSuccess = (): actions.ISignUpSuccessAction => ({
	type: actions.SIGN_UP_SUCCESS,
});

export const signUpError = (): actions.ISignUpErrorAction => ({
	type: actions.SIGN_UP_ERROR,
});
