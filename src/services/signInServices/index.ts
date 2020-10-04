import request from '../../api/requests';
import { setToken } from '../sessionsServices';

interface ISignInProps {
	email: string;
	password: string;
}

export interface ISignInResponse {
	token: string;
}

export const signIn = async ({
	email,
	password,
}: ISignInProps): Promise<void> => {
	try {
		request
			.post<ISignInResponse>({
				url: '/auth/signin',
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					email,
					password,
				},
			})
			.then(({ token }) => setToken(token));
	} catch (error) {
		throw new Error(error.message);
	}
};
