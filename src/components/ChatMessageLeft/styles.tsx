import styled from 'styled-components';

import config from '../../config.json';

export const ContainerMessage = styled.div`
  width: 280px;
  gap: 12px;
  display: flex;
  align-self: flex-start;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${config.colors.gray200};
`;

export const Content = styled.div`
  background: ${config.colors.gray200};

  width: 220px;
  word-wrap: break-word;
  border-radius: 0 12px 12px 12px;
  padding: 12px 14px;

  p {
    text-align: left;
    color: ${config.colors.primaryText};
  }

  footer > p {
    text-align: right;
    font-size: 12px;
    padding-top: 4px;
    margin-bottom: -4px;
    color: ${config.colors.gray400};
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
