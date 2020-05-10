import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { format, parseISO } from 'date-fns';

import Empty from '../../components/Empty';

import api from '../../services/api';

import { Container, InputWrapper, Body } from './styles';

export default function Dashboard() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const loadDeliveries = async () => {
    try {
      const { data } = await api.get('/deliveries', {
        params: { page, q: filter },
      });

      setDeliveries(
        data.deliveries.map((d) => ({
          ...d,
          start_date: d.start_date
            ? format(parseISO(d.start_date), 'dd/MM/yyyy')
            : null,
          end_date: d.end_date
            ? format(parseISO(d.end_date), 'dd/MM/yyyy')
            : null,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadDeliveries();
  }, [page]);

  const handleSearch = () => {
    if (page === 1) return loadDeliveries();

    return setPage(1);
  };

  return (
    <Container>
      <h2>Gerenciando Encomendas</h2>

      <div className="header">
        <InputWrapper>
          <MdSearch size={18} color="#999" />
          <input
            type="text"
            placeholder="Buscar por encomendas"
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? handleSearch() : '')}
          />
        </InputWrapper>

        <button className="add" type="button" onClick={() => {}}>
          <MdAdd size={18} />
          <span>CADASTRAR</span>
        </button>
      </div>
      {!deliveries.length ? (
        <Empty message="Nenhuma encomenda encontrada..." />
      ) : (
        <Body>
          <h1>Tabela</h1>
        </Body>
      )}
    </Container>
  );
}
