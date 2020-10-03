import { TAlertTypes, TVisbility } from '../../../components/Alert/interface';

export const ALERT_SHOW = 'alert/alert_show';

export interface IAlertShowAction {
	readonly type: typeof ALERT_SHOW;
	message: string;
	visibility: TVisbility;
	alertType: TAlertTypes;
}

export const ALERT_CLOSE = 'alert/alert_close';

export interface IAlertCloseAction {
	readonly type: typeof ALERT_CLOSE;
	visibility: TVisbility;
}

export type AlertAction = IAlertShowAction | IAlertCloseAction;
