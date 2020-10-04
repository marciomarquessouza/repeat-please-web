import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
	AlertBox,
	AlertTitle,
	AlertMessage,
	MessageContainer,
	CloseIconStyle,
	AlertMessageContainer,
} from './styles';
import {
	AlertIconError,
	AlertIconWarning,
	AlertIconSuccess,
	CloseIcon,
} from '../../assets/svg';
import { useSelector, useDispatch } from 'react-redux';
import { firstUppercase } from '../../utils/text/firstUpperCase';
import { AppState } from '../../store/reducers/rootReducer';
import { alertClose } from '../../store/actions/actionsCreator/alertActionsCreator';
import { ALERT_OPENED_TIME } from '../../constants/alert';

export const Alert = () => {
	const { t } = useTranslation();
	const { message, visibility, alertType } = useSelector(
		(state: AppState) => state.alert,
	);
	const dispatch = useDispatch();

	const onCloseAlert = () => {
		dispatch(alertClose());
	};

	useEffect(() => {
		if (visibility === 'visible') {
			const timeoutId = setTimeout(() => {
				onCloseAlert();
				clearTimeout(timeoutId);
			}, ALERT_OPENED_TIME);
		}
	});

	const AlertIcon = () => {
		switch (alertType) {
			case 'error':
				return <AlertIconError />;
			case 'warning':
				return <AlertIconWarning />;
			case 'success':
				return <AlertIconSuccess />;
			default:
				return <AlertIconWarning />;
		}
	};

	return (
		<AlertBox visibility={visibility}>
			<MessageContainer>
				{AlertIcon()}
				<AlertTitle type={alertType}>
					{firstUppercase(t(alertType))}:
				</AlertTitle>
				<AlertMessageContainer>
					<AlertMessage>{t(message)}</AlertMessage>
				</AlertMessageContainer>
				<CloseIconStyle onClick={onCloseAlert}>
					<CloseIcon />
				</CloseIconStyle>
			</MessageContainer>
		</AlertBox>
	);
};
