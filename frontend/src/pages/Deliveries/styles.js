import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  /* padding: 0 90px; */

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

export const DeliverymanField = styled.td`
  /* display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  height: auto !important; */
`;

export const LetterAvatar = styled.span`
  background: ${(props) => props.color};
  color: ${(props) => darken(0.3, props.color)};
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-block;
`;

export const DeliveryStatus = styled.span`
  background: ${(props) => props.color};
  color: ${(props) => darken(0.4, props.color)};
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 12px;
  font-size: 14px;
  display: inline-block;
  font-weight: bold;
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 6px;
    background: ${(props) => darken(0.4, props.color)};
  }
`;