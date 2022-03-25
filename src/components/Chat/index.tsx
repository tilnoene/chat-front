import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import * as uuid from 'uuid';

import ChatMessage from '../ChatMessage';

import { Container } from './styles';

type Message = {
  id: string;
  name: string;
  text: string;
}

type Payload = {
  name: string;
  text: string;
}

const socket = io('http://localhost:5050');

const Chat = ({ title }: { title: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState<string>(''); // author
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const receivedMessage = (message: Message) => {
      const newMessage: Message = {
        id: uuid.v4(),
        name: message.name,
        text: message.text,
      }
      
      setMessages(() => [ ...messages, newMessage ]);
    }
    
    socket.on('msgToClient', (message: Message) => {
      receivedMessage(message);
    })
  }, [messages, name, text]);

  const validateInputMessage = () => {
    return name.length > 0 && text.length > 0;
  }
  
  const sendMessage = () => {
    if (validateInputMessage()) {
      const message: Payload = {
        name,
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
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='Escreva seu nome'
      />
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Escreva sua mensagem'
      />
      <button type='button' onClick={() => sendMessage()}>
        Enviar
      </button>
      
      {messages.map((message: Message) => (
        <ChatMessage
          key={message.id}
          name={message.name}
          text={message.text}
        />
      ))}
    </Container>
  );
}

export default Chat;