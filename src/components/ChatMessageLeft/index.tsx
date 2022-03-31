import { formatDate } from '../../services/utils';

import { Content, ContainerMessage, ProfilePicture, Header } from './styles';

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
    <ContainerMessage>
      <ProfilePicture src={profilePictureUrl} alt={`${username} profile picture`} />

      <Content>
        <Header>
          <h4>{name}</h4>
        </Header>

        <p>{text}</p>

        <footer>
          <p>{formatDate(date)}</p>
        </footer>
      </Content>
    </ContainerMessage>
  );
};

export default ChatMessageLeft;
