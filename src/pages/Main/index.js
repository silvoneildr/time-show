import React from 'react';

import {
  Container,
  ContainerProjeto,
  Content,
} from './styles';

import Header from '../../components/Header';
import SidebarMenu from '../../components/Sidemenu';
import Timer from './Timer';
import { formatTime } from './helper';
import { get, BASE_URL } from '../../services/api';

export default function Main() {
  const [repo, setRepo] = React.useState('');
  const [totalTime, setTotalTime] = React.useState(0);
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    async function fetchRepository() {
      const { data } = await get(`${BASE_URL}/time-own`);
      setRepo(data.name);
    }
    async function fetchTasks() {
      const { data } = await get(`${BASE_URL}/time-own/issues`);
      setTasks([...data]);
    }
    fetchRepository();
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <SidebarMenu />
      {repo && repo.length > 0 && tasks && tasks.length > 0 &&
        <Container>
          <Content>
            <ContainerProjeto>
              <span>{repo} </span>
              <span>{`total: ${formatTime(totalTime)}`}</span>
            </ContainerProjeto>
            {tasks && tasks.length > 0 && tasks.map(item => (
              <Timer
                key={item.id}
                task={item.title}
                totalTime={totalTime}
                setTotalTime={setTotalTime}
              />
            ))}
          </Content>
        </Container>
      }
    </>
  );
}