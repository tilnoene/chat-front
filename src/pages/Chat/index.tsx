import { useState, useEffect, useRef } from 'react';

import { useUser } from '../../context/UserContext';
import { useSocket } from '../../context/SocketContext';

import Sidebar from '../../components/Sidebar';
import ChatMessageLeft from '../../components/ChatMessageLeft';
import ChatMessageRight from '../../components/ChatMessageRight';
import ChatMessageSystem from '../../components/ChatMessageSystem';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { ScrollbarProps, Scrollbars } from 'react-custom-scrollbars';

import { Container, ContainerChat, ContainerFooter, ContainerHeader, ContainerMessages } from './styles';

import api from '../../services/api';
import { toastErrorProps } from '../../services/utils';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type Message = {
  id: number;
  text: string;
  createdAt: string;
  updatedAt?: string;
  user: {
    username: string;
    name: string;
  };
};

type Payload = {
  text: string;
};

type User = {
  id: number;
  username: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectedUsers, setConnectedUsers] = useState<User[]>([]);

  const [text, setText] = useState<string>('');

  const { accessToken, userUsername } = useUser();
  const { socket } = useSocket();

  const navigate = useNavigate();
  const scrollbarRef = useRef(null);

  const getMessages = () => {
    api
      .get('/messages', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const previousMessages: Message[] = response.data;

        setMessages(previousMessages);
      })
      .catch((error) => {
        try {
          if (error.statusCode === 401) {
            navigate('/signin');
          } else {
            toast.error(error.message, toastErrorProps);
          }
        } catch {
          toast.error('There was an error loading messages', toastErrorProps);
        }
      });
  };

  useEffect(() => {
    getMessages();

    // recebe lista de usuários conectados
    socket.emit('firstConnect', (users: User[]) => {
      setConnectedUsers(users);
    });

    socket.on('msgToClient', (message: Message) => {
      setMessages((state) => [message, ...state]);
    });

    socket.on('connectedUser', (user: User) => {
      setConnectedUsers((state) => [...state, user]);
    });

    socket.on('disconnectedUser', (user: User) => {
      setConnectedUsers((state) => state.filter((connectedUser) => connectedUser.id !== user.id));
    });
  }, []);

  const validateInputMessage = () => {
    return text.length > 0;
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateInputMessage()) {
      const message: Payload = {
        text,
      };

      socket.emit('msgToServer', message);
      setText('');
    }
  };

  return (
    <Container>
      <Sidebar />
      <ContainerChat>
        <ContainerHeader>
          {connectedUsers.map((user) => (
            <p key={user.id}>{user.username}, </p>
          ))}
        </ContainerHeader>
        <ContainerMessages>
          {messages.map((message: any) =>
            message.isSystem ? (
              <ChatMessageSystem key={message.id} text={message.text} />
            ) : message.user && message.user.username === userUsername ? (
              <ChatMessageRight
                key={message.id}
                name={message.user && message.user.name}
                username={message.user && message.user.username}
                text={message.text}
                date={message.createdAt}
              />
            ) : (
              <ChatMessageLeft
                key={message.id}
                name={message.user && message.user.name}
                username={message.user && message.user.username}
                text={message.text}
                date={message.createdAt}
              />
            ),
          )}
        </ContainerMessages>

        <ContainerFooter onSubmit={handleSendMessage}>
          <Input
            placeholder="Escrever uma mensagem..."
            required
            minLength={1}
            maxLength={2000}
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />

          <Button type="submit" width="80px"></Button>
        </ContainerFooter>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ContainerChat>
    </Container>
  );
};

export default Chat;
