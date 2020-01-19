import React from 'react';
import moment from 'moment';

import {
  Container,
  ContainerProjeto,
  ContainerTask,
  TaskLeft,
  TaskRight,
  Icon,
  StartStop,
} from './styles';

import Header from '../../components/Header';
import SidebarMenu from '../../components/Sidemenu';
import Start from '../../assets/img/icon_play.svg';
import Stop from '../../assets/img/icon_stop.svg';

const initTimer = 0;
const projects = [
  {
    id: 1,
    name: 'Projeto 1',
    tasks: [
      {
        id: 1,
        name: 'Task 1',
        time: initTimer,
      },
      {
        id: 2,
        name: 'Task 2',
        time: initTimer,
      },
      {
        id: 3,
        name: 'Task 3',
        time: initTimer,
      },
      {
        id: 4,
        name: 'Task 4',
        time: initTimer,
      },
      {
        id: 5,
        name: 'Task 5',
        time: initTimer,
      },
      {
        id: 6,
        name: 'Task 6',
        time: initTimer,
      },
      {
        id: 7,
        name: 'Task 7',
        time: initTimer,
      },
      {
        id: 8,
        name: 'Task 8',
        time: initTimer,
      }
    ]
  },
]

export default function Main() {
  const [tasks, setTasks] = React.useState([...projects[0].tasks]);
  const [startStop, setStartStop] = React.useState(null);

  // function handleTimer(task) {
  //   if (tasks && tasks.length > 0) {
  //     tasks.map(item => task.timer +1);
  //   }
  // }

  return (
    <>
      <Header />
      <SidebarMenu />
      <Container>
        <ContainerProjeto>
          <span>{projects[0].name} </span>
          <span>Total: 00:00:00</span>
        </ContainerProjeto>
          {tasks
            && tasks.length > 0
            && tasks.map(task => (
              <ContainerTask
                colorTask={startStop && startStop === task.id}
                key={task.id}
              >
                <TaskLeft>
                  <span>{task.name}</span>
                </TaskLeft>
                <TaskRight>
                  {console.log('task.timer', task)}
                  <span>{task && task.timer > 0 ? task : 0}</span>
                  <StartStop
                    onClick={(e) => {
                      e.preventDefault();
                      if (startStop !== task.id) {
                        setStartStop(task.id);
                      } else {
                        setStartStop(null);
                      }
                      setTasks([...tasks])
                    }}>
                    <Icon
                      width="35px"
                      src={startStop && startStop === task.id ? Start : Stop}
                      alt="startStop"
                    />
                  </StartStop>
                </TaskRight>
              </ContainerTask>
            ))}
      </Container>
    </>
  );
}