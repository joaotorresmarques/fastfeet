import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

// import api from '../../services/api';
import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Form/SearchInput';
import IconButton from '../../components/Form/Button/IconButton';

import { Container, Content, Grid } from './styles';

function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

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

        <Grid>
          <section>
            <strong>ID</strong>
						<strong>Destinatário</strong>
						<strong>Produto</strong>
						<strong>Cidade</strong>
						<strong>Estado</strong>
						<strong>Status</strong>
						<strong>Ações</strong>
          </section>
        </Grid>
      </Content>
    </Container>
  );
}

export default Delivery;