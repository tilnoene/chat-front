import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const ContainerChat = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  background-color: gray;
`;

export const ContainerMessages = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 8px 18px;
  flex-direction: column-reverse;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ContainerFooter = styled.form`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 14px;
`;
