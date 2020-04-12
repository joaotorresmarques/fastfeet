import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    align-self: flex-start;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    color: #444444;
  }

  input {
    width: 100%;
    height: 45px;
    margin: 11px 0 16px;
    border-radius: 4px;
    border: 1px solid #ddd;

    ::placeholder {
      color: #999999;
      padding: 0 15px;
      text-align: center;
      align-items: center;
    }
  }

  span.error {
    margin-bottom: 15px;
    align-self: flex-start;

    font-weight: bold;
    color: red;
    animation: 0.3s ease-out 0s 1 slideIn;
  }
`;
