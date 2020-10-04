import * as actions from '../actions/actionsTypes/signUpActionsTypes';

interface ISignUpState {
	isLoading: boolean;
}

const initialState: ISignUpState = {
	isLoading: false,
};

export const signUpReducer = (
	state: ISignUpState = initialState,
	action: actions.SignUpAction,
): ISignUpState => {
	switch (action.type) {
		case actions.SIGN_UP_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.SIGN_UP_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case actions.SIGN_UP_ERROR:
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
