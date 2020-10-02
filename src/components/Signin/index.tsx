import React, { useState, useContext, useEffect } from 'react';
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
	WelcomeLogoContainer,
} from './styles';
import { LogoWelcome } from '../../assets/svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { LinkButton } from '../LinkButton';
import { SIGN_UP } from '../../routes';
import { AlertContext } from '../../context/alertContext';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actionsCreator/signInActionsCreator';
import { AppState } from '../../store/reducers/rootReducer';

const SignIn = () => {
	const { t } = useTranslation();
	const [state, setState] = useState({ email: '', password: '' });
	const { push } = useHistory();
	const { showAlert } = useContext(AlertContext);
	const dispatch = useDispatch();
	const { error, isLoading } = useSelector(
		(appState: AppState) => appState.signIn,
	);

	useEffect(() => {
		if (error) {
			showAlert(error.message, 'error');
		}
	}, [error, showAlert]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setState({ ...state, [name]: value });
	};

	const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
		const { email, password } = state;
		event.preventDefault();
		dispatch(actions.signInRequest(email, password));
	};

	return (
		<Container>
			<WelcomeLogoContainer>
				<PanelSections flex={1.2}>
					<LogoWelcome />
				</PanelSections>
			</WelcomeLogoContainer>
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
						<Button variant="rounded" type="submit" loading={isLoading}>
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
