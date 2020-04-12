import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  align-items: center;
  padding: 45px 20px;

  img {
    width: 100%;
    margin-top: 10px;
    max-width: 230.85px;
    height: 40px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    padding: 0 8px;

    label + label {
      margin-top: 10px;
    }

    button {
      height: 44px;
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      font-weight: normal;
      color: #ffffff;
      margin: -1px 0 10px;
      font-size: 15px;
      transition: background 0.2s;
      margin-top: 10px;

      &:hover {
        background: #7d40e7;
      }
    }
  }
`;
