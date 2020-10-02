import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSagas from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSagas);
	return store;
};
