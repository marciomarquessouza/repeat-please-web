import styled from 'styled-components';
import { IButtonProps } from './interface';

export const ButtonStyle = styled.button<IButtonProps>`
	display: inline-block;
	box-sizing: border-box;
	text-decoration: none;
	text-align: center;
	transition: all 0.2s;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;

	${(props) =>
		props.variant === 'primary' &&
		`
		margin: 0 0.1em 0.1em 0;
		border: 0.16em solid rgba(255, 255, 255, 0);
		padding: 0.3em 1.2em;
		background-color: ${props.theme.colors.primary};
		border-radius: 0.3em;
		color: ${props.theme.colors.white};
		font-family: ${props.theme.fonts.primary};
		font-weight: 200;
		text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
		font-size: 1.4em;
	`}

	${(props) =>
		props.variant === 'secondary' &&
		`
		border-radius: 0.3em;
		margin: 0 0.1em 0.1em 0;
		color: ${props.theme.colors.white};
		background-color: ${props.theme.colors.transparent};
		padding: 0.3em 2.5em;
		font-family: ${props.theme.fonts.title};
		font-weight: 400;
		font-size: 1.4em;
		border:0.1em solid ${props.theme.colors.white};
		border-radius: 1em;
		text-transform: uppercase;
	`}

	${(props) =>
		props.variant === 'rounded' &&
		`
		border: 0.16em solid rgba(255, 255, 255, 0);
		padding: 0.4em 1.2em;
		background-color: ${props.theme.colors.primary};
		border-radius: 1.5em;
		color: ${props.theme.colors.white};
		font-family: ${props.theme.fonts.title};
		font-weight: 400;
		text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
		font-size: 1.4em;
		text-transform: uppercase;
		width: 60%;
	`}

	&:focus {
		outline: none;
	}

	&:active {
		opacity: 0.5;
	}
`;
