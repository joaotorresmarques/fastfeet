import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import api from '../../services/api';

import SearchInput from '../../components/SearchInput';
import Table from '../../components/Table';

import { Container, PageTitle } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [searchText, setSearchText] = useState('');

  async function handleSearch(search) {
    const response = await api.get(`/deliveries?q=${search}`);
    const data = response.data.rows;
    setDeliveries(data);
    setSearchText(search);
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries');

      const data = response.data.rows;
      setDeliveries(data);
    }

    loadDeliveries();
  }, []);

  return (
    <Container>
      <header>
        <PageTitle>Gerenciando encomendas</PageTitle>
      </header>
        <div>
          <SearchInput
            placeholder="Buscar por encomendas"
            callback={handleSearch}
          />
          <Link to="/deliveries">
            <MdAdd color="#FFFFFF" size={22} />
            Cadastrar
          </Link>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinátario</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr>
                <td>{delivery.id}</td>
                <td>{delivery.recipient.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
  );
}
