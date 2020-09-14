import styled from 'styled-components';

export const LinkStyle = styled.button`
	font-family: ${(props) => props.theme.fonts.primary};
	color: #000;
	text-decoration: underline;
	font-weight: bold;
	font-size: 1.6em;
	background-color: transparent;
	border: none;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	&:active {
		opacity: 0.5;
	}
`;
