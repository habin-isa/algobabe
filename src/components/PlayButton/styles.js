import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  outline: none;
  background-color: white;
  border: none;
  color: #757575;
  margin: 0.5em 0.5em 0.5em 0;
  padding: 20px 25px;
  font-size: 30px;
  text-align: center;
  border-radius: 4px;

  &:hover {
    background: ${darken(0.1, '#ffe419')};
    cursor: pointer;
  }
`;
