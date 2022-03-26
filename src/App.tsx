import './App.css';

import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <Chat title='Sala 01' />
    </Container>
  );
}

export default App;
