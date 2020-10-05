import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Header, SignIn, SignUp, Welcome, Footer } from '../../components';
import { Container } from './styles';
import { SIGN_IN, SIGN_UP, ONBOARDING } from '../../navigation/routes';

export const Onboarding = () => {
	const { push } = useHistory();

	return (
		<>
			<Header onLoginClick={() => push(SIGN_IN)} />
			<Container>
				<Switch>
					<Route exact path={ONBOARDING}>
						<Welcome />
					</Route>
					<Route path={SIGN_IN}>
						<SignIn />
					</Route>
					<Route path={SIGN_UP}>
						<SignUp />
					</Route>
				</Switch>
			</Container>
			<Footer />
		</>
	);
};
