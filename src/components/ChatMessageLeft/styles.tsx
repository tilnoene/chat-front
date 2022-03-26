import styled from 'styled-components';

export const Container = styled.div`
  background-color: violet;
  width: 45%;
  border-radius: 0 10px 10px 10px;
  margin: 12px 0;

  h3 {
    padding: 8px 0 0 12px;
    margin: 0;
    font-size: 18px;

    i {
      font-size: 1em;
      padding: 8px 0;
      margin: 0;
      color: #505050;
    }
  }

  footer > p {
    text-align: right;
    padding: 8px 10px;
    margin: 0;
    color: #555555;
  }
`;

export const Content = styled.div`
  p {
    padding: 8px 12px;
    margin: 0;
    text-align: left;
    color: #000000;
  }
`;