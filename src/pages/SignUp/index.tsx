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

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] =
    useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] =
    useState<string>('');

  const { setAccessToken, setUserUsername } =
    useUser();

  const navigate = useNavigate();

  const handleSignUp = (
    e: any,
    name: string,
    username: string,
    email: string,
    password: string,
  ): void => {
    e.preventDefault();

    // valida os dados
    api
      .post('/auth/signup', {
        name,
        username,
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
          'Ocorreu um erro ao se registrar!',
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
          handleSignUp(
            e,
            name,
            username,
            email,
            password,
          )
        }
      >
        <Input
          placeholder='Nome'
          value={name}
          required
          onChange={(e: any) =>
            setName(e.target.value)
          }
        />

        <Input
          placeholder='Username'
          value={username}
          required
          onChange={(e: any) =>
            setUsername(e.target.value)
          }
        />

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

        <Button type='submit'>Cadastrar</Button>
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

export default SignUp;
