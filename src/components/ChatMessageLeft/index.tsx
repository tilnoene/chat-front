import { formatDate } from '../../services/utils';
import { Container, Content } from './styles';

const ChatMessageLeft = (
  {
    name, 
    username, 
    text, 
    date 
  }: { 
    name: string,
    username: string, 
    text: string, 
    date: string
  }
) => {
  return (
    <Container>
      <Content>
        <h4>{name}</h4>
        <p>{text}</p>
      </Content>
      
      { /* <footer><p>{formatDate(date)}</p></footer> */ }
    </Container>
  );
}

export default ChatMessageLeft;