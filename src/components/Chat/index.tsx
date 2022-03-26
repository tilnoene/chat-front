import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatMessageLeft from '../ChatMessageLeft';
import ChatMessageRight from '../ChatMessageRight';
import ChatMessageSystem from '../ChatMessageSystem';
import api from '../../services/api';

import { Container } from './styles';

type Message = {
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

const socket = io('http://localhost:5050', {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      }
    }
  }
});

const Chat = ({ title }: { title: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>('');

  const currentUserUsername = 'tilnoene';

  useEffect(() => {
    api.get('/messages')
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
  }, [messages]);

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
      
      {messages.map((message: any, index: number) => (
        message.isSystem ?
          <ChatMessageSystem
            key={index}
            text={message.text}
          />
        : (
          message.user && message.user.username === currentUserUsername ?
            <ChatMessageRight
              key={index}
              name={message.user && message.user.name}
              username={message.user && message.user.username}
              text={message.text}
              date={message.createdAt}
            />
            :
            <ChatMessageLeft
              key={index}
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