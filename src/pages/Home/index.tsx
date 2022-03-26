import Chat from '../../components/Chat';
import Sidebar from '../../components/Sidebar';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Chat title='Sala 02' />
    </Container>
  );
}

export default Home;
