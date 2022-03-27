import { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { Input } from '../../components/Input/styles';

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
        const { accessToken, username } = response.data;
        
        setAccessToken(accessToken);
        setUsername(username);

        setEmail('');
        setPassword('');
        
        navigate('/');
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSignin(e, email, password)}>
        <Input 
          name='Email' 
          placeholder='Email'
          type='email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input 
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
