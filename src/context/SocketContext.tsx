import { createContext, useContext, useMemo } from 'react';
import io, { Socket } from 'socket.io-client';

import { useUser } from './UserContext';

import config from '../config.json';

type SocketContextType = {
  socket: Socket,
};

export const SocketContext = createContext<SocketContextType | null>(null);

const SocketProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { accessToken } = useUser();
  
  const socket = useMemo(() => (
    io(config.SOCKET_URL, {
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      }
    })
  ), [accessToken]);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) throw new Error('useSocket must be used within a SocketProvider');

  const { socket } = context;

  return { socket };
};

export default SocketProvider;
