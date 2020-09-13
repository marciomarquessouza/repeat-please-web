import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/Onboarding';

const App = (): JSX.Element => (
	<Router>
		<Switch>
			<Route path="/" component={Onboarding} />
		</Switch>
	</Router>
);

export default App;
