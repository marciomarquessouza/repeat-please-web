import React from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import { Onboarding, Dashboard } from '../pages';
import { PrivateRoute } from './PrivateRoutes';
import { isAuthenticated } from '../services/sessionsServices';
import history from './history';
import { DASHBOARD, ONBOARDING } from './routes';

export const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route
				exact
				path="/"
				render={() =>
					isAuthenticated() ? (
						<Redirect to={DASHBOARD} />
					) : (
						<Redirect to={ONBOARDING} />
					)
				}
			/>
			<Route path={ONBOARDING} component={Onboarding} />
			<PrivateRoute path={DASHBOARD} component={Dashboard} />
			<Route path="*" render={() => <Redirect to="/" />} />
		</Switch>
	</Router>
);
