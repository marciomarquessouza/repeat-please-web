import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 20px 40px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const LogoContainer = styled.div`
	display: inline-block;
`;

export const LogoTitleContainer = styled.span`
	@media (max-width: 860px) {
		display: none;
	}
`;
