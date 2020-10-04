import React from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import { Onboarding, Dashboard } from '../pages';
import { PrivateRoute } from './PrivateRoutes';
import { isAuthenticated } from '../services/sessionsServices';
import history from './history';

export const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route
				exact
				path="/"
				render={() =>
					isAuthenticated() ? (
						<Redirect to="/dashboard" />
					) : (
						<Redirect to="/onboarding" />
					)
				}
			/>
			<Route path="/onboarding" component={Onboarding} />
			<PrivateRoute path="/dashboard" component={Dashboard} />
			<Route path="*" component={() => <h1>Page not found</h1>} />
		</Switch>
	</Router>
);
