import { createContext, useContext } from 'react';
import io from 'socket.io-client';

import { useUser } from './UserContext';

type SocketContextType = {
  socket: any,
};

export const SocketContext = createContext<SocketContextType | null>(null);

const SocketProvider: React.FC<React.ReactNode> = ({ children }) => {
  const { accessToken } = useUser();
  
  const socket = io('http://localhost:5050', {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    }
  });

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
