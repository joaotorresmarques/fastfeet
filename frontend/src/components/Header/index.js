import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo"/>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;