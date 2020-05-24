import styled, { keyframes, css } from 'styled-components';
import { Form as Unform } from '@unform/web';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

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

  svg {
    width: 22px;
    height: 22px;
    ${(props) =>
      props.searching &&
      css`
      animation ${rotate} 1s linear infinite;
    `}
  }

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