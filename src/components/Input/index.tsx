import { useState } from 'react';

import eye_icon from '../../assets/eye-icon.svg';
import eye_blocked_icon from '../../assets/eye-blocked-icon.svg';
import search_icon from '../../assets/search-icon.svg';

import { Container, InputStyle, Span, InputIcon } from './styles';

const Input = ({
  placeholder = '',
  value = '',
  required = false,
  minLength = 3,
  maxLength = 32,
  type = 'text',
  disabled = false,
  width = '100%',
  onClick = undefined,
  onChange = undefined,
  ...props
}: {
  placeholder?: string,
  value?: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  type?: 'text' | 'password' | 'email' | 'search',
  disabled?: boolean,
  width?: string,
  onClick?: any,
  onChange?: any,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container width={width}>
      <InputStyle
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        defaultValue={value}
        required={required}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        width={width}
        onChange={onChange}
        {...props}
      />
      <Span>{placeholder}</Span>
      
      {type === 'password' && (
        <InputIcon
          src={showPassword ? eye_blocked_icon : eye_icon}
          alt={showPassword ? 'Ocultar senha' : 'Visualizar senha'}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}

      {type === 'search' && (
        <InputIcon 
          src={search_icon}
          alt={'Realizar busca'}
          onClick={disabled ? undefined : onClick} 
        />
      )}
    </Container>
  );
};

export default Input;
