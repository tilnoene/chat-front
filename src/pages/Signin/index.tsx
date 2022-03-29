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
import { toastErrorProps } from '../../services/utils';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] =
    useState<string>('');

  const { setAccessToken, setUserUsername } =
    useUser();

  const navigate = useNavigate();

  const handleSignIn = (
    e: React.FormEvent<HTMLFormElement>,
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
      .then(({ data }) => {
        const { accessToken, username } = data;

        setAccessToken(accessToken);
        setUserUsername(username);

        setEmail('');
        setPassword('');

        navigate('/');
      })
      .catch((error) => {
        try {
          toast.error(
            error.message,
            toastErrorProps,
          );
        } catch {
          toast.error(
            'There was an error logging in',
            toastErrorProps,
          );
        }
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
          placeholder='Password'
          type='password'
          value={password}
          required
          onChange={(e: any) =>
            setPassword(e.target.value)
          }
        />

        <Button type='submit'>Send</Button>
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
