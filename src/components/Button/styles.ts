import styled from 'styled-components';

import config from '../../config.json';

type ContainerButtonType = {
  type: 'submit' | 'reset' | 'button';
  width: string;
}

export const ContainerButton = styled.button<ContainerButtonType>`
  width: ${props => props.width};
  height: 40px;
  padding: 0 26px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  font-family: 'Montserrat';
  font-size: 15px;
  font-weight: 400;

  color: ${config.colors.secondaryText};
  background-color: ${config.colors
    .primary};
  border: 2px solid ${config.colors.primaryBorder};
`;
