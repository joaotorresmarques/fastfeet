import React, { useState, useEffect, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import { parseISO, format } from 'date-fns';

import api from '../../services/api';
import history from '../../services/history';

import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Form/SearchInput';
import IconButton from '../../components/Form/Button/IconButton';

import DeliveryItem from './DeliveryItem';

import { Container, Content, Grid } from './styles';

function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

  const formatDates = useCallback((data) => {
    return data.map(delivery => ({
			...delivery,
			start_dateFormated: delivery.start_date
				? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
				: null,
			end_dateFormated: delivery.end_date
				? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
				: null,
		})); 
  }, [])
  
  const handleSearchDelivery = useCallback(async (e) => {
    setPage(1);
    const response = await api.get('/deliveries', {
      params: {
        q: e.target.value,
        page,
      },
    });

    const data = formatDates(response.data.rows);


    setDeliveries(data);
  }, [formatDates, page])

  const loadDeliveries = useCallback(async () => {
    const response = await api.get('/deliveries', {
      params: {
        page,
      },
    });

    const data = formatDates(response.data.rows);


    console.log(response.data.rows);
    setDeliveries(data);
  }, [formatDates, page])

  useEffect(() => {
    loadDeliveries();
  }, [loadDeliveries, page]);

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando encomendas">
          <SearchInput
            onChange={handleSearchDelivery}
            type="text"
            placeholder="Buscar por encomendas"
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            type="button"
            action={() => history.push('/delivery/form')}
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