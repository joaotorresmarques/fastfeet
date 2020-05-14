import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Navigation } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo"/>
          <Navigation>
            <NavLink to="/delivery">ENCOMENDAS</NavLink>
            <NavLink to="#">ENTREGADORES</NavLink>
            <NavLink to="#">DESTINATÁRIOS</NavLink>
            <NavLink to="#">PROBLEMAS</NavLink>
          </Navigation>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;