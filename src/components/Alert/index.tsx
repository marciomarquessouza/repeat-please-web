import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	AlertBox,
	AlertTitle,
	AlertMessage,
	MessageContainer,
	CloseIconStyle,
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

export const Alert = () => {
	const { t } = useTranslation();
	const { message, visibility, alertType } = useSelector(
		(state: AppState) => state.alert,
	);
	const dispatch = useDispatch();

	const onClose = () => {
		dispatch(alertClose());
	};

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
				<AlertMessage>{message}</AlertMessage>
				<CloseIconStyle onClick={onClose}>
					<CloseIcon />
				</CloseIconStyle>
			</MessageContainer>
		</AlertBox>
	);
};
