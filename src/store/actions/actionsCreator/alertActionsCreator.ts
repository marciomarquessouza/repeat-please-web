import { TAlertTypes } from '../../../components/Alert/interface';
import * as actions from '../actionsTypes/alertActionsTypes';

export const alertShow = (
	message: string,
	alertType: TAlertTypes,
): actions.IAlertShowAction => ({
	type: actions.ALERT_SHOW,
	visibility: 'visible',
	message,
	alertType,
});

export const alertClose = (): actions.IAlertCloseAction => ({
	type: actions.ALERT_CLOSE,
	visibility: 'hidden',
});
