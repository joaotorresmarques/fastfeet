import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 90px;

  header {
    margin-bottom: 34px;
  }

  header + div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    a {
      padding: 0 16px;
      color: #FFF;
      font-weight: bold;
      font-size: 14px;
      background: #7d40e7;
      transition: background 300ms;
      border-radius: 4px;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 36px;

      svg {
        margin-right: 4px;
      }

      &:hover {
        background: ${darken(0.2, '#7d40e7')};
      }
    }
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: #444444;
  font-size: 24px;
  font-weight: bold;
`;