import styled from 'styled-components';
import { themeColors } from '../../../assets/styles/_variables';

export const ContainerTask = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 0.8rem;
	background-color: ${themeColors.background};
	border: 0.09rem solid lightgray;
	margin: 0.2rem;
`;

export const Icon = styled.img`padding: 0 0.2rem;`;

export const StartStop = styled.div`
	cursor: pointer;
	display: flex;
`;

export const TaskLeft = styled.div`
	display: flex;
	align-items: center;
`;

export const TaskRight = styled.div`
	display: flex;
	align-items: center;
	span {
		margin: 0 0.75rem;
		font-size: 1.8rem !important;
	}
`;
