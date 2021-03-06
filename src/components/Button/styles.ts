import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  border: 0;
  padding: 0 16px;
  font-weight: 500;
  font-size: 17px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
