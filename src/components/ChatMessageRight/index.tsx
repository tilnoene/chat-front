import { formatDate } from '../../services/utils';

import { RiPencilFill } from 'react-icons/ri';
import { HiTrash } from 'react-icons/hi';

import { ContainerIcons, ContainerMessage, Content, Header, ProfilePicture } from './styles';

import config from '../../config.json';
import { useState } from 'react';

const ChatMessageRight = (
  {
    name, 
    username, 
    text, 
    date,
    profilePictureUrl = undefined,
  }: { 
    name: string,
    username: string, 
    text: string, 
    date: string,
    profilePictureUrl?: string | undefined;
  }
) => {
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const handleShowIcons = (show: boolean) => {
    setShowIcons(show);
  }

  return (
    <ContainerMessage>
      <Content onMouseEnter={() => handleShowIcons(true)} onMouseLeave={() => handleShowIcons(false)}>
        <Header>
          <h4>{name}</h4>

          {showIcons && 
            <ContainerIcons>
              <RiPencilFill size={20} color={config.colors.gray700} />
              <HiTrash size={20} color={config.colors.gray700} />
            </ContainerIcons>
          }
        </Header>

        <p>{text}</p>

        <footer>
          <p>{formatDate(date)}</p>
        </footer>
      </Content>
      
      <ProfilePicture src={profilePictureUrl} alt={`${username} profile picture`} />
    </ContainerMessage>
  );
}

export default ChatMessageRight;
