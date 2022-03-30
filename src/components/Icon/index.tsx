import { IconImage } from './styles';

const Icon = ({
  src = undefined,
  alt,
  size = 'small',
  cursor = 'default',
  onClick = undefined,
}: {
  src?: string | undefined;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  cursor?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
}) => {
  const sizes = {
    small: {
      width: '25px',
      height: '25px',
    },
    medium: {
      width: '50px',
      height: '50px',
    },
    large: {
      width: '50px',
      height: '50px',
    },
  };

  return (
    <IconImage
      src={src}
      alt={alt}
      cursor={cursor}
      onClick={onClick}
      {...sizes[size]}
    />
  );
};

export default Icon;
