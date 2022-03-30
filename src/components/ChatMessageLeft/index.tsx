import { formatDate } from '../../services/utils';
import { Content, ContainerMessage, ProfilePicture, Header, ContainerIcons } from './styles';

import { RiPencilFill } from 'react-icons/ri';
import { HiTrash } from 'react-icons/hi';

import config from '../../config.json';

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

          <ContainerIcons>
            <RiPencilFill size={20} color={config.colors.gray700} />
            <HiTrash size={20} color={config.colors.gray700} />
          </ContainerIcons>
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
