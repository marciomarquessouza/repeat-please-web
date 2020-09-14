import styled from 'styled-components';

export const InputStyle = styled.input`
	display: inline-block;
	width: 100%;
	padding: 0.3em 1.2em;
	border-radius: 0.2em;
	box-sizing: border-box;
	border: 1px solid rgba(0, 0, 0, 0.3);
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 400;
	font-size: 1.5em;
	background-color: ${(props) => props.theme.colors.glass};
	color: ${(props) => props.theme.colors.white};
	&:focus {
		outline: none;
		background-color: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.grayPrimary};
	}

	::placeholder,
	::-webkit-input-placeholder {
		color: ${(props) => props.theme.colors.white};
	}
`;
