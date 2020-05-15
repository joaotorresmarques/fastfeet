import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 120px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
`;

export const Grid = styled.div`
  height: 400px;
  > section {
    display: grid;

    padding-left: 25px;
    padding-right: 5px;

    grid-template-columns: 0.5fr 1.5fr 1fr 1.5fr 1fr 1fr 1fr;

    > strong:last-child {
      text-align: center;
    }

    strong:nth-child(6) {
      text-align: center;
    }  
  }
`;