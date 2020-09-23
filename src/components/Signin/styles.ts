import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

interface IPanelSectionsProps {
	flex: number;
}

export const PanelSections = styled.div<IPanelSectionsProps>`
	display: flex;
	flex: ${(props) => props.flex};
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SignInForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	padding: 2em;
`;

export const SignInTitle = styled.div`
	font-family: ${(props) => props.theme.fonts.title};
	font-size: 1.6em;
`;

export const InputContainer = styled.div`
	margin: 0.8em;
	width: 100%;
`;

export const SubmitContainer = styled.div`
	margin: 1em 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const SignUpLinkContainer = styled.div`
	margin: 0.6em;
`;

export const WelcomeLogoContainer = styled.div`
	display: flex;
	flex: 1;

	@media (max-width: 860px) {
		display: none;
	}
`;
