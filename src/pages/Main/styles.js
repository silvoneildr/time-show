import styled from 'styled-components';
import { themeColors } from '../../assets/styles/_variables';

export const Container = styled.div`
  height: 91vh;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	margin-left: 221px;
	color: ${themeColors.text};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const ContainerProjeto = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0.2rem;
  border: 0.09rem solid lightgray;
  height: 3.5rem;
  align-items: center;
	background-color: ${themeColors.background};
	span {
		margin: 0 0.75rem;
		font-size: 1.8rem !important;
		font-weight: 600;
	}
`;
export const ContainerTask = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 0.8rem;
	background-color: ${(props) => (props.colorTask ? themeColors.light : themeColors.background)};
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
