import request from '../../api/requests';

interface ISignUpProps {
	email: string;
	password: string;
	name: string;
}

export interface ISignUpResponse {
	id: number;
}

export const signUp = async ({
	name,
	email,
	password,
}: ISignUpProps): Promise<ISignUpResponse> => {
	try {
		const { id } = await request.post<ISignUpResponse>({
			url: '/auth/signup',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				email,
				password,
				name,
			},
		});
		return { id };
	} catch (error) {
		throw new Error(error.message);
	}
};
