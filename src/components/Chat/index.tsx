import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatMessage from '../ChatMessage';
import ChatMessageSystem from '../ChatMessageSystem';
import api from '../services/api';

import { Container } from './styles';

type Message = {
  text: string;
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

  useEffect(() => {
    api.get('/messages')
      .then((response) => {
        const previousMessages: Message[] = response.data;
        setMessages(previousMessages);
      })
      .catch(error => console.error(error));
  })

  useEffect(() => {
    const receivedMessage = (message: Message) => {
      const newMessage: Message = {
        text: message.text,
      }
      
      setMessages(() => [ ...messages, newMessage ]);
    }
    
    socket.on('msgToClient', (message: Message) => {
      console.log(message);
      receivedMessage(message);
    })
  }, []);

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
        :
          <ChatMessage
            key={index}
            // name={message.name}
            name={message.user && message.user.username}
            text={message.text}
          />
      ))}
    </Container>
  );
}

export default Chat;