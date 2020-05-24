import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border-spacing: 0px 21px;
  max-width: 100%;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 5px;
    object-fit: cover;
  }
  thead th {
    color: #444444;
    font-size: 16px;
    font-weight: bold;
    padding: 20px;
    padding-bottom: 0px;

    &:first-child {
      text-align: center;
    }

    &:last-child {
      text-align: center;
    }
  }
  tbody {
    tr {
      background: #fff;
      border-radius: 4px;
      td {
        padding: 12px 20px;
        color: #666666;
        font-size: 16px;
        height: 35px;
        
        &:first-child {
           text-align: center;
         }

        &:last-child {
          text-align: center;
        }
      }
    }
  }
`;