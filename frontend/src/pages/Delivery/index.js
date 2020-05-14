import React from 'react';
import { MdAdd } from 'react-icons/md';

// import api from '../../services/api';
import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Form/SearchInput';
import IconButton from '../../components/Form/Button/IconButton';

import { Container, Content } from './styles';

function Delivery() {
  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando encomendas">
          <SearchInput
            onChange={() => {}}
            type="text"
            placeholder="Buscar por encomendas"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            type="button"
            action={() => {}}
          />
        </HeaderList>
      </Content>
    </Container>
  );
}

export default Delivery;