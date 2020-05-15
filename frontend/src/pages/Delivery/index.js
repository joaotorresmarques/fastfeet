import React, { useState, useEffect, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '../../services/api';

import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Form/SearchInput';
import IconButton from '../../components/Form/Button/IconButton';

import DeliveryItem from './DeliveryItem';

import { Container, Content, Grid } from './styles';

function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);


  const loadDeliveries = useCallback(async () => {
    const response = await api.get('/deliveries', {
      params: {
        page,
      },
    });

    const data = response.data;

    console.log(response.data);
    setDeliveries(data);
  }, [page])

  useEffect(() => {
    loadDeliveries();
  }, [loadDeliveries, page]);

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
          {deliveries.map(delivery => (
            <DeliveryItem
              updateDeliveries={loadDeliveries}
              key={delivery.id}
              data={delivery}
            />
          ))}
        </Grid>
      </Content>
    </Container>
  );
}

export default Delivery;