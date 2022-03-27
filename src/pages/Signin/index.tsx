import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../../context/UserContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  ToastContainer,
  toast,
} from 'react-toastify';

import { Container } from './styles';

import api from '../../services/api';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] =
    useState<string>('');

  const { setAccessToken, setUserUsername } =
    useUser();

  const navigate = useNavigate();

  const handleSignIn = (
    e: any,
    email: string,
    password: string,
  ): void => {
    e.preventDefault();

    // valida os dados
    api
      .post('/auth/signin', {
        email,
        password,
      })
      .then((response) => {
        const { accessToken, username } =
          response.data;

        setAccessToken(accessToken);
        setUserUsername(username);

        setEmail('');
        setPassword('');

        navigate('/');
      })
      .catch((error) => {
        toast.error(
          'Ocorreu um erro ao entrar!',
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );

        console.error(error);
      });
  };

  return (
    <Container>
      <form
        onSubmit={(e) =>
          handleSignIn(e, email, password)
        }
      >
        <Input
          placeholder='Email'
          type='email'
          value={email}
          required
          onChange={(e: any) =>
            setEmail(e.target.value)
          }
        />

        <Input
          placeholder='Senha'
          type='password'
          value={password}
          required
          onChange={(e: any) =>
            setPassword(e.target.value)
          }
        />

        <Button type='submit'>Entrar</Button>
      </form>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default SignIn;
