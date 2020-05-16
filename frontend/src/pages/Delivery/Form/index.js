import React from 'react';

import { Container, Content } from './styles';

import HeaderForm from '../../../components/HeaderForm';
import BackButton from '../../../components/Button/BackButton';

export default function DeliveryForm() {
  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de encomendas"/>
        <BackButton />
      </Content>
    </Container>
  );
}

