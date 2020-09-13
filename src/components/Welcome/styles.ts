import styled from 'styled-components';

export const WelcomeContainer = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LogoWelcomeContainer = styled.div`
	margin: 60px 10px 10px 10px;
`;

export const StartButtonContainer = styled.div`
	margin: 20px 10px 30px 10px;
`;
