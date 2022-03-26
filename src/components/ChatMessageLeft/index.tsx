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
      <h3>{name} <i>({username})</i></h3>

      <Content>
        <p>{text}</p>
      </Content>
      
      <footer><p>{formatDate(date)}</p></footer>
    </Container>
  );
}

export default ChatMessageLeft;