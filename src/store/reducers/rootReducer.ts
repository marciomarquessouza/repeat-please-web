import { combineReducers } from 'redux';
import { signInReducer } from './signInReducer';
import { signUpReducer } from './signUpReducer';
import { alertReducer } from './alertReducer';

const rootReducer = combineReducers({
	signIn: signInReducer,
	signup: signUpReducer,
	alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
