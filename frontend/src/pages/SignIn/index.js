import React from 'react';
import { Form } from '@unform/web';

import logo from '../../assets/fastfeet-logo.png';
import Input from '../../components/Unform/Input';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form>
        <Input
          name="email"
          label="Seu E-mail"
          type="email"
          placeholder="exemplo@email.com"
        />

        <Input
          name="password"
          label="Sua Senha"
          type="password"
          placeholder="***********"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
