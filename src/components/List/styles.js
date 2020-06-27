import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 10px;
    }

    button {
      background-color: #3b5bfd;
      border-radius: 42px;
      border: 0;
      cursor: pointer;
      height: 42px;
      width: 42px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
