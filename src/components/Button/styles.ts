import styled from 'styled-components';

export const ButtonStyle = styled.a`
	display: inline-block;
	padding: 0.3em 1.2em;
	margin: 0 0.1em 0.1em 0;
	border: 0.16em solid rgba(255, 255, 255, 0);
	background-color: ${(props) => props.theme.colors.primary};
	box-sizing: border-box;
	text-decoration: none;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 200;
	text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
	text-align: center;
	transition: all 0.2s;
	cursor: default;

	&:active {
		opacity: 0.5;
	}
`;

export const ButtonSquareStyle = styled(ButtonStyle)`
	border-radius: 0.3em;
`;
