import React from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import SearchInput from '../../components/SearchInput';

import { Container, PageTitle } from './styles';

export default function Deliveries() {
  return (
    <Container>
      <header>
        <PageTitle>Gerenciando encomendas</PageTitle>
      </header>
        <div>
          <SearchInput
            placeholder="Buscar por encomendas"
            callback={() => {}}
          />
          <Link to="/deliveries">
            <MdAdd color="#FFFFFF" size={22} />
            Cadastrar
          </Link>
        </div>
    </Container>
  );
}
