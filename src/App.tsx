import UserProvider from './context/UserContext';

import Router from './services/router';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
