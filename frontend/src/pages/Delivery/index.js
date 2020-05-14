import React from 'react';

// import api from '../../services/api';
import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Form/SearchInput';

import { Container, Content } from './styles';

function Delivery() {
  return (
    <Container>
      <Content>
       <HeaderList title="Gerencie suas encomendas" />
       <SearchInput
        type="text"
        placeholder="Buscar por encomendas"
       />
      </Content>
    </Container>
  );
}

export default Delivery;