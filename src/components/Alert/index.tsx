import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	AlertBox,
	AlertTitle,
	AlertMessage,
	MessageContainer,
	CloseIconStyle,
} from './styles';
import { IAlertProps } from './interface';
import {
	AlertIconError,
	AlertIconWarning,
	AlertIconSuccess,
	CloseIcon,
} from '../../assets/svg';
import { firstUppercase } from '../../utils/text/firstUpperCase';

export const Alert = ({ visibility, message, onClose, type }: IAlertProps) => {
	const { t } = useTranslation();

	const AlertIcon = () => {
		switch (type) {
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
				<AlertTitle type={type}>{firstUppercase(t(type))}:</AlertTitle>
				<AlertMessage>{message}</AlertMessage>
				<CloseIconStyle onClick={onClose}>
					<CloseIcon />
				</CloseIconStyle>
			</MessageContainer>
		</AlertBox>
	);
};
