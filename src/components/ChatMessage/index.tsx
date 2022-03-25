import { Container } from './styles';

const ChatMessage = ({ name, text }: { name: string, text: string }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;