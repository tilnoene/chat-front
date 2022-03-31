import styled from 'styled-components';

import config from '../../config.json';

export const ContainerMessage = styled.div`
  width: 280px;
  gap: 12px;
  display: flex;
  align-self: flex-end;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-self: flex-end;
  background: #ec008c;
  background: -webkit-linear-gradient(45deg, #fc6767, #ec008c);
  background: linear-gradient(45deg, #fc6767, #ec008c);
`;

export const Content = styled.div`
  background: #ec008c;  /* fallback for old browsers */
  background: -webkit-linear-gradient(45deg, #fc6767, #ec008c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #fc6767, #ec008c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 220px;
  word-wrap: break-word;

  border-radius: 12px 12px 0 12px;
  padding: 12px 14px;

  p {
    text-align: left;
    color: ${config.colors.gray900};
  }

  footer > p {
    text-align: left;
    font-size: 12px;
    padding-top: 4px;
    margin-bottom: -4px;
    color: ${config.colors.gray700};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;

  h4 {
    font-size: 15px;
    color: ${config.colors.gray700};
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 4px;

  svg {
    cursor: pointer;
  }
`;
