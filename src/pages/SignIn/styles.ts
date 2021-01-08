import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroud from '../../assets/sign-in-background.png';

export const Container = styled.div`
  font-family: 'Roboto Slab', serif;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-weight: 500;
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      color: #f4ede8;
      width: 100%;

      &:placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      color: #312e38;
      border-radius: 10px;
      height: 56px;
      width: 100%;
      border: 0;
      padding: 0 16px;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
    .createAccount {
      color: #ff9000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: center;

      align-items: center;
      place-content: center;

      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroud}) no-repeat center;
  background-size: cover;
`;
