import { formatDate } from '../../services/utils';
import Icon from '../Icon';
import { Container, Content } from './styles';

const ChatMessageLeft = ({
  name,
  username,
  text,
  date,
  profilePictureUrl = undefined,
}: {
  name: string;
  username: string;
  text: string;
  date: string;
  profilePictureUrl?: string | undefined;
}) => {
  return (
    <Container>
      <Icon src={profilePictureUrl} alt={`${username} profile`} size='medium' />

      <Content>
        <h4>{name}</h4>
        <p>{text}</p>
      </Content>
      
      {/* <footer><p>{formatDate(date)}</p></footer> */}
    </Container>
  );
};

export default ChatMessageLeft;
