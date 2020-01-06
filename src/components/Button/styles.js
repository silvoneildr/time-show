import styled from 'styled-components';
import { themeColors } from '../../assets/styles/_variables';

export const Container = styled.div`
  cursor: pointer;
  color: white;
  background-color: ${themeColors.secondary};
  width: 12rem;
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: transparent;
  &:hover {
    background-color: ${themeColors.primary}
  }
`;
