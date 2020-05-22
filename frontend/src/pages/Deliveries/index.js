import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../../components/SearchInput';

import { Container, PageTitle } from './styles';

export default function Deliveries() {
  return (
    <Container>
      <header>
        <PageTitle>Gerenciando encomendas</PageTitle>
        <div>
          <SearchInput />
          <Link to="/deliveries">
            Cadastrar
          </Link>
        </div>
      </header>
    </Container>
  );
}
