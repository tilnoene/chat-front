import styled from 'styled-components';

import config from '../../config.json';

export const Container = styled.div`
  background: ${config.colors.gray200};

  align-self: flex-start;
  
  width: 280px;
  border-radius: 0 12px 12px 12px;
  padding: 12px 14px;
  margin-bottom: 32px;

  margin-left: 64px;
  img {
    margin-left: -80px;
    background-color: lightgray;
    border-radius: 50%;
  }

  footer > p {
    color: #555555;
    font-size: 14px;
    margin-bottom: -32px;
  }
`;

export const Content = styled.div`
  h4 {
    font-size: 14px;
    color: ${config.colors.gray700};
  }

  p {
    text-align: left;
    color: ${config.colors.primaryText};;
  }
`;
