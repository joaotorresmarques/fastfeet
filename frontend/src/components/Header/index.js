import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Navigation, Profile } from './styles';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

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

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;