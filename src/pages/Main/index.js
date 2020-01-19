import React from 'react';

import {
  Container,
  ContainerProjeto,
  ContainerTask,
  TaskLeft,
  TaskRight,
  Icon,
} from './styles';

import Header from '../../components/Header';
import SidebarMenu from '../../components/Sidemenu';
import Start from '../../assets/img/icon_play.svg';
import Stop from '../../assets/img/icon_stop.svg';

const projects = [
  {
    id: 1,
    name: 'Projeto 1',
    tasks: [
      {
        id: 1,
        name: 'Task 1'
      },
      {
        id: 2,
        name: 'Task 2'
      },
      {
        id: 3,
        name: 'Task 3'
      },
      {
        id: 4,
        name: 'Task 4'
      },
      {
        id: 5,
        name: 'Task 5'
      },
      {
        id: 6,
        name: 'Task 6'
      },
      {
        id: 7,
        name: 'Task 7'
      },
      {
        id: 8,
        name: 'Task 8'
      }
    ]
  },
]

export default function Main() {
  return (
    <>
      <Header />
      <SidebarMenu />
      <Container>
        <ContainerProjeto>
          <span>{projects[0].name} </span>
          <span>Total: 00:00</span>
        </ContainerProjeto>
          {projects[0]
            && projects[0].tasks
            && projects[0].tasks.length > 0
            && projects[0].tasks.map(item => (
              <ContainerTask key={item.id}>
                <TaskLeft>
                  <span>{item.name}</span>
                </TaskLeft>
                <TaskRight>
                  <span>00:00</span>
                  <Icon width="35px" src={Start} alt="start" />
                  <Icon width="35px" src={Stop} alt="stop" />
                </TaskRight>
              </ContainerTask>
            ))}
      </Container>
    </>
  );
}