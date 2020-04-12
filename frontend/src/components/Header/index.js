import React from 'react';

import logo from '../../assets/fastfeet-logo.png';

import { Container, StatusSystem } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <img src={logo} alt="FastFeet" />
        <ul>
          <li>Encomendas</li>
          <li>Entregadores</li>
          <li>Destinatários</li>
          <li>Problemas</li>
        </ul>
      </nav>

      <StatusSystem>
        <span>Admin FastFeet</span>
        <button type="button">Sair do Sistema</button>
      </StatusSystem>
    </Container>
  );
}
