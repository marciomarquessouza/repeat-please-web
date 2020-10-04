export const SIGN_UP_REQUEST = 'signin/signup_request';

export interface ISignUpRequestAction {
	readonly type: typeof SIGN_UP_REQUEST;
	email: string;
	password: string;
	name: string;
}

export const SIGN_UP_SUCCESS = 'signin/signup_success';

export interface ISignUpSuccessAction {
	readonly type: typeof SIGN_UP_SUCCESS;
}

export const SIGN_UP_ERROR = 'signin/signup_error';

export interface ISignUpErrorAction {
	readonly type: typeof SIGN_UP_ERROR;
}

export type SignUpAction =
	| ISignUpRequestAction
	| ISignUpSuccessAction
	| ISignUpErrorAction;
