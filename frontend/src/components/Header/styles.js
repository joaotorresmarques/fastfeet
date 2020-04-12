import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 160px;
      margin-left: 30px;
      border-right: 1px solid #ddd;
      padding-right: 60px;
    }

    ul {
      display: flex;
      margin-left: 61px;
      width: 100%;
      height: 100%;

      li {
        display: flex;
        justify-content: space-between;
        color: #444444;
        margin-right: 20px;
        font-size: 18px;
      }

      li:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const StatusSystem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  span {
    margin-bottom: 10px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: red;
  }
`;
