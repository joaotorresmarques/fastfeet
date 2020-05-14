import React from 'react';

// import api from '../../services/api';
import HeaderList from '../../components/HeaderList';

import { Container, Content } from './styles';

function Delivery() {
  return (
    <Container>
      <Content>
       <HeaderList title="Gerencie suas encomendas" />
      </Content>
    </Container>
  );
}

export default Delivery;