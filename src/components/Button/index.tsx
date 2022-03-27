import { ContainerButton } from './styles';

const Button = ({
  children,
  type = 'button',
  width = '100%',
  ...props
}: {
  children: any,
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
