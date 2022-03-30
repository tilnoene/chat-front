import { formatDate } from '../../services/utils';
import Icon from '../Icon';
import { ContainerMessage, Content } from './styles';

const ChatMessageRight = (
  {
    name, 
    username, 
    text, 
    date,
  }: { 
    name: string,
    username: string, 
    text: string, 
    date: string,
  }
) => {
  return (
    <ContainerMessage>
      <Content>
        <p>{text}</p>
      </Content>
      
      { /* <footer><p>{formatDate(date)}</p></footer> */  }
    </ContainerMessage>
  );
}

export default ChatMessageRight;
