import { useState } from 'react';

import eye_icon from '../assets/eye.svg';
import closed_eye_icon from '../assets/eye-blocked.svg';
import search_icon from '../assets/search-icon.svg';

import { Label, Input, Span } from './styles';

import Icon from '../Icon';

const InputText = ({
  placeholder = '',
  value = '',
  required = false,
  maxLength = 32,
  type = 'text',
  disabled = false,
  width = '100%',
  onClick = undefined,
  ...props
}: {
  placeholder?: string,
  value?: string,
  required?: boolean,
  maxLength?: number,
  type?: 'text' | 'password' | 'search',
  disabled?: boolean,
  width?: string,
  onClick?: any,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Label>
      <Input
        type={type}
        value={value}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        width={width}
        {...props}
      />
      <Span>{placeholder}</Span>
      
      {type === 'password' && (
        <Icon
          src={showPassword ? closed_eye_icon : eye_icon}
          alt={showPassword ? 'Visualizar senha' : 'Ocultar senha'}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}

      {type === 'search' && (
        <Icon 
          src={search_icon}
          alt={'Realizar busca'}
          onClick={disabled ? undefined : onClick} 
        />
      )}
    </Label>
  );
};

export default InputText;
