import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  background: #FFF;
  border: 1px solid #dddddddd;
  border-radius: 4px;
  padding: 10px 16px;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  input {
    font-size: 14px;
    color: #000;
    border: none;
    padding-top: 2px;
    padding-left: 5px;

    &::placeholder {
      font-size: 14px;
      color: #999999;
    }
  }
`;

export const Input = styled.input``;