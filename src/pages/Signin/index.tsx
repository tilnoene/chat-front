import { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSignin = ( email: string, password: string ): void => {
    // valida os dados

    api.post('/auth/signin', {
      email,
      password,
    })
      .then((response) => {
        const responseData = response.data;

        sessionStorage.setItem('access_token', responseData.access_token);

        setEmail('');
        setPassword('');
        
        navigate('/');
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <input 
        name='Email' 
        placeholder='Email'
        type='email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        name='Senha' 
        placeholder='Senha'
        type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleSignin(email, password)}>
        Login
      </button>
    </Container>
  );
}

export default Signin;
