export const SIGN_IN_REQUEST = 'signin/signin_request';

export interface ISignInRequesAction {
	readonly type: typeof SIGN_IN_REQUEST;
	email: string;
	password: string;
}

export const SIGN_IN_SUCCESS = 'signin/signin_success';

export interface ISignInSuccessAction {
	readonly type: typeof SIGN_IN_SUCCESS;
}

export const SIGN_IN_ERROR = 'signin/signin_error';

export interface ISignInErrorAction {
	readonly type: typeof SIGN_IN_ERROR;
}

export type SignInAction =
	| ISignInRequesAction
	| ISignInSuccessAction
	| ISignInErrorAction;
