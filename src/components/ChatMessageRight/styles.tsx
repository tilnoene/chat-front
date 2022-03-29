import styled from 'styled-components';

import config from '../../config.json';

export const Container = styled.div`
  background: #ec008c;  /* fallback for old browsers */
  background: -webkit-linear-gradient(45deg, #fc6767, #ec008c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #fc6767, #ec008c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  align-self: flex-end;

  width: 280px;
  border-radius: 12px 12px 0 12px;
  padding: 12px 14px;
  margin-bottom: 32px;

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
    color: white;
  }
`;