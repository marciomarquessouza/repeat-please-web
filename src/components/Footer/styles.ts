import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export const CardContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 20px;
	min-width: 300px;
`;

export const CardLeft = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	margin: 10px;
`;

export const CardRight = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;
	padding: 0 0 0 10px;
`;

export const CardTitle = styled.span`
	font-family: ${(props) => props.theme.fonts.title};
	font-size: 1.2em;
	margin: 0 0 6px 0;
`;

export const CardBody = styled.span`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1em;
`;
