import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1230px;
  min-width: 375px;
  margin: 30px auto;
  padding: 0 30px;

  h2 {
    color: grey;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 10px;
  }

  div.header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    input {
      padding-left: 35px;
      width: 237px;
      height: 36px;
      border-radius: 4px;
      border: 1px solid;
      margin-bottom: 10px;
    }

    button.add {
      display: flex;
      align-items: center;
      padding: 0 10px;
      width: 142px;
      height: 36px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #c53030;
      margin: 5px 0 10px;

      span {
        padding-left: 10px;
        font-weight: bold;
      }
    }
  }
`;

export const InputWrapper = styled.div``;
