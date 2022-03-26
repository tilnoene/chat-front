import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/Signin';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Home />} />
    </Routes>
  </BrowserRouter>
);
  
export default Router;