import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import { defaultTheme } from './theme';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { Alert } from './components/Alert';

const store = configureStore();

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<Provider store={store}>
			<Alert />
			<Router>
				<Switch>
					<Route path="/" component={Onboarding} />
				</Switch>
			</Router>
		</Provider>
	</ThemeProvider>
);

export default App;
