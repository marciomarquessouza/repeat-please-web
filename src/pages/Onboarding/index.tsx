import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import SignIn from '../../components/Signin';
import { Container } from './styles';
import { SIGN_IN } from '../../routes';

const Onboarding = () => {
	const { push } = useHistory();
	return (
		<>
			<Header onLoginClick={() => push(SIGN_IN)} />
			<Container>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route path="/signin">
						<SignIn />
					</Route>
				</Switch>
			</Container>
			<h1>Footer</h1>
		</>
	);
};

export default Onboarding;
