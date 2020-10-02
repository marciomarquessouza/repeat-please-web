import { combineReducers } from 'redux';
import { signInReducer } from './signInReducer';

const rootReducer = combineReducers({
	signIn: signInReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
