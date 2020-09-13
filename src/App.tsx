import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import { defaultTheme } from './theme';

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<Router>
			<Switch>
				<Route path="/" component={Onboarding} />
			</Switch>
		</Router>
	</ThemeProvider>
);

export default App;
