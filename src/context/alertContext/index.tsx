import React, { createContext, useState } from 'react';
import { Alert } from '../../components/Alert';
import { IAlertProviderProps, IAlertContext, IAlertState } from './interface';
import { TAlertTypes } from '../../components/Alert/interface';

const initialState: IAlertState = {
	visibility: null,
	message: '',
	type: 'error',
};

export const AlertContext = createContext<IAlertContext>({
	showAlert: () => {},
});

export const AlertProvider = ({ children }: IAlertProviderProps) => {
	const [state, setState] = useState(initialState);

	const hideAlert = (message: string, type: TAlertTypes) => {
		setState({ message, type, visibility: 'hidden' });
	};

	const showAlert = (message: string, type: TAlertTypes) => {
		setState({ visibility: 'visible', message, type });
		const timeoutId = setTimeout(() => {
			hideAlert(message, type);
			clearTimeout(timeoutId);
		}, 5000);
	};

	return (
		<AlertContext.Provider value={{ showAlert }}>
			<Alert
				visibility={state.visibility}
				message={state.message}
				type={state.type}
				onClose={() => hideAlert(state.message, state.type)}
			/>
			{children}
		</AlertContext.Provider>
	);
};
