import styled from 'styled-components';
import { themeColors } from '../../assets/styles/_variables';

export const Nav = styled.nav`
  width: 14.8rem;
  background-color: ${themeColors.secondary};
  height: 100%;
  position: fixed;
  left: 0;
  transition: 0.35s;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  display: flex;
  line-height: 4;
  cursor: pointer;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  background-color: ${props => props.selected && themeColors.secondary};
  border-left-color: ${props => props.selected && themeColors.light};

  &:hover {
    background-color: #0567a2;
    text-decoration: none;
  }
`;

export const MenuTitle = styled.div`
  display: flex;
  line-height: 5;
  justify-content: center;
  border-bottom: 1px solid ${themeColors.primary};

  padding: ${props => props.headerMenu && '0 10px'};
`;

export const MenuIcon = styled.div`
  display: flex;
  text-align: center;
  position: relative;
  margin-right: 5px;
  width: 40px;
  justify-content: center;

  img {
    padding-left: 6px;
  }
`;

export const MenuText = styled.div`
  color: ${themeColors.light};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${props => (props.isExpanded ? 1 : 0)};
  transition: opacity 0.3s;
`;
