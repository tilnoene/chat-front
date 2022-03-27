import { memo } from 'react';
import { Container } from './styles';

const ChatMessageSystem = ({ text }: { text: string }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
}

export default memo(ChatMessageSystem);