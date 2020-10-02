import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import { defaultTheme } from './theme';
import { AlertProvider } from './context/alertContext';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const store = configureStore();

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<AlertProvider>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/" component={Onboarding} />
					</Switch>
				</Router>
			</Provider>
		</AlertProvider>
	</ThemeProvider>
);

export default App;
