import React from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import SignIn from '../../components/Signin';
import { Container } from './styles';
import { SIGN_IN } from '../../routes';

export const Onboarding = () => {
	const { push } = useHistory();
	const { path, url } = useRouteMatch();

	return (
		<>
			<Header onLoginClick={() => push(`${url}${SIGN_IN}`)} />
			<Container>
				<Switch>
					<Route exact path={path}>
						<Welcome />
					</Route>
					<Route path={`${path}/signin`}>
						<SignIn />
					</Route>
				</Switch>
			</Container>
			<h1>Footer</h1>
		</>
	);
};
