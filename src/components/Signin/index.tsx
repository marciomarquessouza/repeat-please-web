import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import {
	Container,
	PanelSections,
	SignInTitle,
	InputContainer,
	SubmitContainer,
	SignInForm,
	SignUpLinkContainer,
} from './styles';
import LogoWelcome from '../../assets/svg/LogoWelcome';
import { Input } from '../Input';
import { Button } from '../Button';
import { LinkButton } from '../LinkButton';
import { SIGN_UP } from '../../routes';
import { signin } from '../../services/signin';

const SignIn = () => {
	const { t } = useTranslation();
	const [state, setState] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const { push } = useHistory();

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setState({ ...state, [name]: value });
	};

	const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
		const { email, password } = state;
		event.preventDefault();
		try {
			await signin({ email, password });
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<Container>
			<PanelSections flex={1.2}>
				<LogoWelcome />
			</PanelSections>
			<PanelSections flex={0.8}>
				<SignInForm onSubmit={onSubmit}>
					{error && <span>{error}</span>}
					<SignInTitle>{t('welcome')}</SignInTitle>
					<InputContainer>
						<Input
							type="email"
							placeholder={t('email')}
							name="email"
							autoComplete="off"
							value={state.email}
							onChange={onChange}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="password"
							placeholder={t('password')}
							name="password"
							autoComplete="off"
							value={state.password}
							onChange={onChange}
						/>
					</InputContainer>
					<SubmitContainer>
						<Button variant="rounded" type="submit">
							{t('login')}
						</Button>
					</SubmitContainer>
					<SignUpLinkContainer>
						<LinkButton onClick={() => push(SIGN_UP)}>
							{t('signUpLink')}
						</LinkButton>
					</SignUpLinkContainer>
				</SignInForm>
			</PanelSections>
		</Container>
	);
};

export default SignIn;
