import React, { useState, useLayoutEffect } from 'react';
import { FiPower } from 'react-icons/fi';
import LinkWrapper from '../../helpers/LinkWrapper';
import Menu from './Menu';

import logo from '../../assets/fastfeet-logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [width, setWidth] = useState([0]);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth]);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Container>
      <Content>
        {width <= 768 ? (
          <nav>
            <Menu />
            <img src={logo} alt="FastFeet" />
          </nav>
        ) : (
          <nav>
            <img src={logo} alt="FastFeet" />
            <LinkWrapper to="/orders">Encomendas</LinkWrapper>
            <LinkWrapper to="/deliveryman">Entregadores</LinkWrapper>
            <LinkWrapper to="/recipient">Destinatários</LinkWrapper>
            <LinkWrapper to="/problem">Problemas</LinkWrapper>
          </nav>
        )}

        {width <= 768 ? (
          <FiPower size={20} />
        ) : (
          <aside>
            <Profile>
              <div>
                <strong>FastFeet User</strong>
              </div>
              <button type="button" onClick={() => {}}>
                Sair do Sistema
              </button>
            </Profile>
          </aside>
        )}
      </Content>
    </Container>
  );
}
