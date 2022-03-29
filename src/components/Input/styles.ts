import styled from 'styled-components';

import config from '../../config.json';

type ContainerInputType = {
  width: string;
}

export const Container = styled.div<ContainerInputType>`
  width: ${props => props.width};
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background: ${config.colors.gray400};
  font-family: 'Montserrat';
  border: none;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

type LabelType = {
  width: string;
  labelColor?: string;
};

export const Label = styled.label<LabelType>`
  width: ${props => props.width};
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  user-select: none;

  cursor: text;
  & input:disabled + span {
    cursor: not-allowed;
  }

  & input:valid + span,
  & input:focus + span {
    top: 33%;
    font-size: 10px;
    color: ${config.colors.secondaryText};
    background-color: ${(props) =>
      props.labelColor ||
      config.colors.secondaryBackground};
  }

  & input:valid + span,
  & input:focus + span {
    padding: 0 5px;
    left: 8px;
  }
`;

export const Span = styled.span`
  position: absolute;
  left: 12px;
  top: calc(50% + 10px);
  transform: translateY(-50%);
  color: #c5a5bc;
  transition: top 0.3s ease, font-size 0.3s ease,
    color 0.3s ease;
`;

export const InputIcon = styled.img`
  cursor: pointer;
  width: 23px;
  height: 23px;

  margin-left: -36px;
  margin-bottom: -7px;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
