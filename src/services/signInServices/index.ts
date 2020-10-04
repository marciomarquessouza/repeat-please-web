import request from '../../api/requests';
import { setToken } from '../sessionsServices';

interface ISignInProps {
	email: string;
	password: string;
}

export interface ISignInResponse {
	accessToken: string;
}

export const signIn = async ({
	email,
	password,
}: ISignInProps): Promise<ISignInResponse> => {
	try {
		const { accessToken } = await request.post<ISignInResponse>({
			url: '/auth/signin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email,
				password,
			},
		});
		setToken(accessToken);
		return { accessToken };
	} catch (error) {
		throw new Error(error.message);
	}
};
