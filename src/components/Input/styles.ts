import styled from 'styled-components';

import config from '../../config.json';

export const InputStyle = styled.input`
  border: 2px solid ${config.colors.primaryBorder};
  -webkit-appearance: none;
  appearance: none;
  background: none;
  padding: 12px;
  border-radius: 3px;
  width: ${(props) => props.width || '220px'};
  outline: none;
  font-size: 14px;
  transition: border-color 0.3 ease;
  box-sizing: border-box;
  font-family: 'Montserrat';

  &:focus {
    border-color: ${config.colors.primaryTitle};
    transition-delay: 0.1s;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(0, 0, 0, 0.1);
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
