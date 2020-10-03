import * as actions from '../actions/actionsTypes/signInActionsTypes';

interface ISignInState {
	isLoading: boolean;
	token: string;
}

const initialState: ISignInState = {
	isLoading: false,
	token: '',
};

export const signInReducer = (
	state: ISignInState = initialState,
	action: actions.SignInAction,
): ISignInState => {
	switch (action.type) {
		case actions.SIGN_IN_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.SIGN_IN_SUCCESS:
			return {
				...state,
				isLoading: false,
				token: action.token,
			};
		case actions.SIGN_IN_ERROR:
			return {
				...state,
				isLoading: false,
			};
		default:
			return {
				...state,
			};
	}
};
