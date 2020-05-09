import React, { useState } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import Empty from '../../components/Empty';

import { Container, InputWrapper } from './styles';

export default function Dashboard() {
  const [deliveries, setDeliveries] = useState([]);

  return (
    <Container>
      <h2>Gerenciando Encomendas</h2>

      <div className="header">
        <InputWrapper>
          <MdSearch size={18} color="#999" />
          <input type="text" placeholder="Buscar por encomendas" />
        </InputWrapper>

        <button className="add" type="button" onClick={() => {}}>
          <MdAdd size={18} />
          <span>CADASTRAR</span>
        </button>
      </div>
      {!deliveries.length ? (
        <Empty message="Nenhuma encomenda encontrada..." />
      ) : (
        <h1>tabela</h1>
      )}
    </Container>
  );
}
