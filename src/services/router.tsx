import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SocketProvider from '../context/SocketContext';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SocketProvider><Home /></SocketProvider>} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
  
export default Router;