import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Container,
	PanelSections,
	SignInTitle,
	InputContainer,
	SubmitContainer,
	SignInForm,
	WelcomeLogoContainer,
} from './styles';
import { LogoWelcome } from '../../assets/svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actionsCreator/signUpActionsCreator';
import { alertShow } from '../../store/actions/actionsCreator/alertActionsCreator';
import { AppState } from '../../store/reducers/rootReducer';

export const SignUp = () => {
	const { t } = useTranslation();
	const [state, setState] = useState({ email: '', password: '', name: '' });
	const dispatch = useDispatch();
	const { isLoading } = useSelector((appState: AppState) => appState.signIn);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setState({ ...state, [name]: value });
	};

	const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, password, name } = state;
		if (!email || !password || !name) {
			dispatch(alertShow('fillInAllFields', 'error'));
			return;
		}
		dispatch(actions.signUpRequest(email, password, name));
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
					<SignInTitle>{t('createAccount')}</SignInTitle>
					<InputContainer>
						<Input
							type="text"
							placeholder={t('name')}
							name="name"
							autoComplete="on"
							value={state.name}
							onChange={onChange}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="email"
							placeholder={t('email')}
							name="email"
							autoComplete="on"
							value={state.email}
							onChange={onChange}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="password"
							placeholder={t('password')}
							name="password"
							autoComplete="on"
							value={state.password}
							onChange={onChange}
						/>
					</InputContainer>
					<SubmitContainer>
						<Button variant="rounded" type="submit" loading={isLoading}>
							{t('signUp')}
						</Button>
					</SubmitContainer>
				</SignInForm>
			</PanelSections>
		</Container>
	);
};
