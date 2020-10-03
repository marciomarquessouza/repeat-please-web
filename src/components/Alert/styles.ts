import styled, { keyframes, css } from 'styled-components';
import { IAlertBoxProps, TAlertTypes, IAlertTitleProps } from './interface';
import { defaultTheme } from '../../theme';

const alertTitleColor = (alertType: TAlertTypes) => {
	switch (alertType) {
		case 'error':
			return defaultTheme.colors.error;
		case 'success':
			return defaultTheme.colors.success;
		case 'warning':
			return defaultTheme.colors.warning;
		default:
			return defaultTheme.colors.warning;
	}
};

const fadein = keyframes`
	0% { bottom: 0; opacity: 0;}
	100% { bottom: 30px; opacity: 1;}
`;

const fadeout = keyframes`
	0% { bottom: 30px; opacity: 1;}
	100% { bottom: -250px; opacity: 0;}
`;

export const AlertBox = styled.div<IAlertBoxProps>`
	visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
	position: fixed;
	min-width: 400px;
	max-width: 80%;
	margin-left: -250px;
	background-color: #f1f0db;
	border-radius: 12px;
	padding: 12px;
	z-index: 1;
	right: 20px;
	bottom: ${(props) => (props.visibility === 'visible' ? '30px' : '-100px')};
	border: 3px solid #000;

	${(props) =>
		props.visibility === 'visible' &&
		css`
			animation: ${fadein} 0.5s;
		`};

	${(props) =>
		props.visibility === 'hidden' &&
		css`
			visibility: visible;
			animation: ${fadeout} 0.5s;
		`};
`;

export const MessageContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const AlertTitle = styled.span<IAlertTitleProps>`
	font-family: ${(props) => props.theme.fonts.title};
	font-size: 1.5em;
	margin: 0.3em;
	color: ${(props) => alertTitleColor(props.type)};
`;

export const AlertMessageContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: start;
	flex: 1;
`;

export const AlertMessage = styled.span`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1.2em;
	margin: 0.3em;
`;

export const CloseIconStyle = styled.button`
	background: transparent;
	border: none;
	&:focus {
		outline: none;
	}

	&:active {
		opacity: 0.5;
	}
`;
