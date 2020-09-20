export type TVisbility = 'visible' | 'hidden' | null;

export type TAlertTypes = 'error' | 'warning' | 'success';

export interface IAlertBoxProps {
	visibility: TVisbility;
}

export interface IAlertProps {
	visibility: TVisbility;
	message: string;
	type: TAlertTypes;
	onClose: () => void;
}

export interface IAlertTitleProps {
	type: TAlertTypes;
}
