import React from 'react';

import { Nav, MenuItem, MenuIcon, MenuText, MenuContent } from './styles';

import IconHome from '../../assets/img/icon_home.svg';
import IconProjects from '../../assets/img/icon_projects.svg';
import IconEditTime from '../../assets/img/icon_edit_time.svg';
import IconSettings from '../../assets/img/icon_settings.svg';
import IconHelp from '../../assets/img/icon_help.svg';
import IconLogout from '../../assets/img/icon_logout.svg';

const MENU_ITEMS = [
  { link: '', width: '26px', icon: IconHome, alt:'alt_home', title: 'Home' },
  { link: '', width: '26px', icon: IconProjects, alt:'alt_projects', title: 'Projects' },
  { link: '', width: '26px', icon: IconEditTime, alt:'alt_edit_time', title: 'Edit Time' },
  { link: '', width: '40px', icon: IconSettings, alt:'alt_setttings', title: 'Settings' },
  { link: '', width: '40px', icon: IconHelp, alt:'alt_help', title: 'Help' },
  { link: '', width: '40px', icon: IconLogout, alt:'alt_logout', title: 'Logout' },
];

export default function Sidemenu() {
  return (
    <Nav isExpanded={true}>
      <MenuContent>
        {MENU_ITEMS.map(item => (
          <MenuItem to={item.link} selected={false} >
            <MenuIcon>
              <img width={item.width} src={item.icon} alt={item.alt} />
            </MenuIcon>
            <MenuText isExpanded={true}>{item.title}</MenuText>
          </MenuItem>
        ))}
      </MenuContent>
    </Nav>
  );
}
