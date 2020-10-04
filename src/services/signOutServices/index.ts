import { removeToken } from '../sessionsServices';
import history from '../../navigation/history';

export const signOut = (): void => {
	removeToken();
	history.push('/');
};
