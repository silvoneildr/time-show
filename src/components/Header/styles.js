import styled from 'styled-components';
import { themeColors } from '../../assets/styles/_variables';

export const Container = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem 0 1rem;
  background-color: ${themeColors.primary};
`;

export const Title = styled.span`
  margin: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 1.2rem;
  border-right: 0.1rem solid #ccc;
`;

export const Icon = styled.img`
  padding-bottom: 6px;
`;

export const Username = styled.p`
  color: #707070;
  font-size: 14px;
  margin-bottom: 0;
`;

export const RightContent = styled.div`
  align-items: center;
  display: flex;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Children = styled.div`
  margin-right: auto;
  margin-left: 30px;
`;
