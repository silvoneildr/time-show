import React from 'react';

import {
  Container,
  ContainerProjeto,
} from './styles';

import Header from '../../components/Header';
import SidebarMenu from '../../components/Sidemenu';
import Timer from './Timer';

const initTimer = 0;
const projects = [
  {
    id: 1,
    name: 'Projeto 1',
    tasks: [
      {
        id: 1,
        name: 'Task 1',
        timer: initTimer,
      },
      {
        id: 2,
        name: 'Task 2',
        timer: initTimer,
      },
      {
        id: 3,
        name: 'Task 3',
        timer: initTimer,
      },
      {
        id: 4,
        name: 'Task 4',
        timer: initTimer,
      },
      {
        id: 5,
        name: 'Task 5',
        timer: initTimer,
      },
      {
        id: 6,
        name: 'Task 6',
        timer: initTimer,
      },
      {
        id: 7,
        name: 'Task 7',
        timer: initTimer,
      },
      {
        id: 8,
        name: 'Task 8',
        timer: initTimer,
      }
    ]
  },
]

export default function Main() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    function fetchData() {
      setTasks([...projects[0].tasks]);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <SidebarMenu />
      <Container>
        <ContainerProjeto>
          <span>{projects[0].name} </span>
          <span>Total: 00:00:00</span>
        </ContainerProjeto>
        {tasks && tasks.length > 0 && tasks.map(item => (
          <Timer key={item.id} task={item}/>
        ))}
      </Container>
    </>
  );
}