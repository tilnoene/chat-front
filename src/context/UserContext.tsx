import { useState, createContext, useContext } from 'react';

type UserContextType = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  userUsername: string;
  setUserUsername: (username: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [accessToken, setAccessTokenProvider] = useState<string>(localStorage.getItem('accessToken') || '');
  const [userUsername, setUserUsernameProvider] = useState<string>(localStorage.getItem('userUsername') || '');

  const setAccessToken = ( accessToken: string ): void => {
    setAccessTokenProvider(accessToken);
    localStorage.setItem('accessToken', accessToken);
  }

  const setUserUsername = ( username: string ): void => {
    setUserUsernameProvider(username);
    localStorage.setItem('userUsername', username);
  }

  return (
    <UserContext.Provider
      value={{
        accessToken, 
        setAccessToken, 
        userUsername,
        setUserUsername
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used within a UserProvider');

  const { accessToken, setAccessToken, userUsername, setUserUsername } = context;

  return { accessToken, setAccessToken, userUsername, setUserUsername };
};

export default UserProvider;
