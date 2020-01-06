import styled from 'styled-components';
import { themeColors } from '../../assets/styles/_variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 3rem;
    /* color: white; */
  }
  h1 {
    font-size: 2.5rem;
    /* color: white; */
  }
  button {
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
  }
`;

export const ContainerLogosTechs = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 0.7rem;
  a {
    padding: 0.7rem;
    color: white;
    font-size: 1.5rem;
  }
`
export const LogoTechs = styled.img`
  display: flex;
  height: 6rem;
  margin: 0.5rem 5rem;
`;
