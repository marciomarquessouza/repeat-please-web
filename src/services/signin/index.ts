import request from '../../api/requests';
import * as config from '../../config';

interface ISignInProps {
	email: string;
	password: string;
}

export interface ISignInResponse {
	token: string;
}

export const signin = async ({
	email,
	password,
}: ISignInProps): Promise<ISignInResponse> => {
	try {
		return await request.post<ISignInResponse>({
			url: `${config.API_URL}/auth/signin`,
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email,
				password,
			},
		});
	} catch (error) {
		throw new Error(error.message);
	}
};
