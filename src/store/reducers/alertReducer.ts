import { TAlertTypes, TVisbility } from '../../components/Alert/interface';
import * as actions from '../actions/actionsTypes/alertActionsTypes';

interface IAlertState {
	message: string;
	alertType: TAlertTypes;
	visibility: TVisbility;
}

const initialState: IAlertState = {
	message: '',
	alertType: 'error',
	visibility: null,
};

export const alertReducer = (
	state: IAlertState = initialState,
	action: actions.AlertAction,
): IAlertState => {
	switch (action.type) {
		case actions.ALERT_SHOW:
			return {
				...state,
				message: action.message,
				alertType: action.alertType,
				visibility: action.visibility,
			};
		case actions.ALERT_CLOSE:
			return {
				...state,
				visibility: action.visibility,
			};
		default:
			return {
				...state,
			};
	}
};
