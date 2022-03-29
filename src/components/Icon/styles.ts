import styled from 'styled-components';

type IconImageType = {
  cursor: string;
  width: string;
  height: string;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
}

export const IconImage = styled.img<IconImageType>`
  cursor: ${props => props.cursor};
  width: ${props => props.width};
  height: ${props => props.height};
`;