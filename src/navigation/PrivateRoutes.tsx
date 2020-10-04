import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuthenticated } from '../services/sessionsServices';
import { SIGN_IN } from './routes';

interface PrivateRouteProps extends RouteProps {
	component: any;
}

export const PrivateRoute = ({
	component: Component,
	...rest
}: PrivateRouteProps) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated() ? <Component {...props} /> : <Redirect to={SIGN_IN} />
			}
		/>
	);
};
