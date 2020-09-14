import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Container,
	PanelSections,
	SignInTitle,
	InputContainer,
	SubmitContainer,
	SignInForm,
} from './styles';
import LogoWelcome from '../../assets/svg/LogoWelcome';
import { Input } from '../Input';
import { Button } from '../Button';

const SignIn = () => {
	const { t } = useTranslation();
	const [state, setState] = useState({ email: '', password: '' });

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setState({ ...state, [name]: value });
	};

	const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Container>
			<PanelSections flex={1.2}>
				<LogoWelcome />
			</PanelSections>
			<PanelSections flex={0.8}>
				<SignInForm onSubmit={onSubmit}>
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
				</SignInForm>
			</PanelSections>
		</Container>
	);
};

export default SignIn;
