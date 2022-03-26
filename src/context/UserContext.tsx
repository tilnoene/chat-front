import { useState, createContext, useContext } from 'react';

type UserContextType = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  username: string;
  setUsername: (username: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [accessToken, setAccessTokenProvider] = useState<string>(sessionStorage.getItem('accessToken') || '');
  const [username, setUsernameProvider] = useState<string>(sessionStorage.getItem('username') || '');

  const setAccessToken = ( accessToken: string ): void => {
    setAccessTokenProvider(accessToken);
    sessionStorage.setItem('accessToken', accessToken);
  }

  const setUsername = ( username: string ): void => {
    setUsernameProvider(username);
    sessionStorage.setItem('username', username);
  }

  return (
    <UserContext.Provider
      value={{
        accessToken, 
        setAccessToken, 
        username, 
        setUsername
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used within a UserProvider');

  const { accessToken, setAccessToken, username, setUsername } = context;

  return { accessToken, setAccessToken, username, setUsername };
};

export default UserProvider;
