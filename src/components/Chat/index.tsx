import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { useUser } from '../../context/UserContext';

import ChatMessageLeft from '../ChatMessageLeft';
import ChatMessageRight from '../ChatMessageRight';
import ChatMessageSystem from '../ChatMessageSystem';

import api from '../../services/api';

import { Container } from './styles';
import { useSocket } from '../../context/SocketContext';

type Message = {
  id: number,
  text: string;
  createdAt: string;
  updatedAt?: string;
  user: { 
    username: string,
    name: string,
  }
}

type Payload = {
  text: string;
}

const Chat = ({ title }: { title: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>('');

  const { accessToken, username } = useUser();
  const { socket } = useSocket();

  useEffect(() => {
    api.get('/messages', { 
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then((response) => {
        const previousMessages: Message[] = response.data;
        setMessages(previousMessages);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const receivedMessage = ( message: Message ) => {
      setMessages(() => [ message, ...messages ]);
    }
    
    socket.on('msgToClient', (message: Message) => {
      console.log(message);
      receivedMessage(message);
    })
  }, [messages, socket]);

  const validateInputMessage = () => {
    return text.length > 0;
  }
  
  const sendMessage = () => {
    if (validateInputMessage()) {
      const message: Payload = {
        text
      }

      socket.emit('msgToServer', message);
      setText('');
    }
  }

  return (
    <Container>
      <h1>{title}</h1>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Escreva sua mensagem'
      />
      <button type='button' onClick={() => sendMessage()}>
        Enviar
      </button>
      
      {messages.map((message: any) => (
        message.isSystem ?
          <ChatMessageSystem
            key={message.id}
            text={message.text}
          />
        : (
          message.user && message.user.username === username ?
            <ChatMessageRight
              key={message.id}
              name={message.user && message.user.name}
              username={message.user && message.user.username}
              text={message.text}
              date={message.createdAt}
            />
            :
            <ChatMessageLeft
              key={message.id}
              name={message.user && message.user.name}
              username={message.user && message.user.username}
              text={message.text}
              date={message.createdAt}
            />
        )
      ))}
    </Container>
  );
}

export default Chat;