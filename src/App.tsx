import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import { defaultTheme } from './theme';
import { AlertProvider } from './context/alertContext';

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<AlertProvider>
			<Router>
				<Switch>
					<Route path="/" component={Onboarding} />
				</Switch>
			</Router>
		</AlertProvider>
	</ThemeProvider>
);

export default App;
