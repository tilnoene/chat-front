import { ContainerButton } from './styles';

const Button = ({
  type = 'button',
  children = null,
  width = '100%',
  ...props
}: {
  children?: JSX.Element | string | null,
  type?: 'submit' | 'reset' | 'button',
  width?: string,
}) => {
  return (
    <ContainerButton type={type} width={width} {...props}>
      {children}
    </ContainerButton>
  );
};

export default Button;
