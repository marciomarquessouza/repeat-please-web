import { combineReducers } from 'redux';
import { signInReducer } from './signInReducer';
import { alertReducer } from './alertReducer';

const rootReducer = combineReducers({
	signIn: signInReducer,
	alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
