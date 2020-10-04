import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { Alert } from './components/Alert';
import { Routes } from './navigation';

const store = configureStore();

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<Provider store={store}>
			<Alert />
			<Routes />
		</Provider>
	</ThemeProvider>
);

export default App;
