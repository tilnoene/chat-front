import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import SocketProvider from '../context/SocketContext';
import { useUser } from '../context/UserContext';

import Chat from '../pages/Chat';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const ProtectedRoute = ({
  children,
}: {
  children: any;
}) => {
  const { accessToken } = useUser();

  // rota para validar se ele é valido
  if (!accessToken) {
    return <Navigate to='/signin' replace />;
  }

  return children;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <SocketProvider>
              <Chat />
            </SocketProvider>
          </ProtectedRoute>
        }
      />
      <Route
        path='/signin'
        element={<SignIn />}
      />
      <Route
        path='/signup'
        element={<SignUp />}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
