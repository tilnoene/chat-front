import { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { setAccessToken, setUsername } = useUser();

  const navigate = useNavigate();

  const handleSignin = ( e: any, email: string, password: string ): void => {
    e.preventDefault();

    // valida os dados

    api.post('/auth/signin', {
      email,
      password,
    })
      .then((response) => {
        const { access_token } = response.data;
        
        setAccessToken(access_token);
        setUsername('tilnoene');

        setEmail('');
        setPassword('');
        
        navigate('/');
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSignin(e, email, password)}>
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

        <button type='submit'>
          Login
        </button>
      </form>
    </Container>
  );
}

export default Signin;
