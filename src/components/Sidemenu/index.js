import React from 'react';
import { ipcRenderer } from 'electron';
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
  { link: '', width: '40px', icon: IconLogout, alt:'alt_logout', title: 'Fechar' },
];

export default function Sidemenu() {
  function quitApp() {
    const options = {
      title: 'Confirme a ação',
      buttons: ['Fechar', 'Cancelar'],
      type: 'question',
      message: 'Fechar aplicação',
      detail: 'Deseja realmente fechar a aplicação?',
    };
    ipcRenderer.send('confirm-close', options);
  }

  function openFile() {
    ipcRenderer.send('open-file');
  }

  return (
    <Nav isExpanded={true}>
      <MenuContent>
        {MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map(item => (
          <MenuItem
            key={item.alt}
            to={item.link}
            selected={false}
            onClick={() => {
              if (item.alt === 'alt_logout') {
                quitApp();
              }
              if (item.alt === 'alt_projects') {
                openFile();
              }
            }}
          >
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
