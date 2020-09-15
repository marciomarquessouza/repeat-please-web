import request from '../../api/requests';

interface ISignInProps {
	email: string;
	password: string;
}

export const signin = async ({ email, password }: ISignInProps) => {
	try {
		await request.post({
			url: 'http://localhost:5000/auth/signin',
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
