import { TAlertTypes, TVisbility } from '../../components/Alert/interface';

export interface IAlertProviderProps {
	children: React.ReactNode;
}

export interface IAlertContext {
	showAlert: (message: string, type: TAlertTypes) => void;
}

export interface IAlertState {
	visibility: TVisbility | null;
	message: string;
	type: TAlertTypes;
}
