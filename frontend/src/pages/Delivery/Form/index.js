import React, { useRef } from 'react';

import { Container, Content, UnForm } from './styles';

import HeaderForm from '../../../components/HeaderForm';
import BackButton from '../../../components/Button/BackButton';
import SaveButton from '../../../components/Button/SaveButton';
import SimpleInput from '../../../components/Form/SimpleInput';
import AsyncSelectInput from '../../../components/Form/AsyncSelectInput';

export default function DeliveryForm() {
  const formRef = useRef(null);

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de encomendas">
          <BackButton />
          <SaveButton action={() => formRef.current.submitForm()}/>
        </HeaderForm>

        <UnForm>
          <section>
            <AsyncSelectInput
              type="text"
              label="Destinatário"
              name="recipient_id"
              placeholder="Destinatários"
            />
            <AsyncSelectInput
              type="text"
              label="Entregador"
              name="deliveryman_id"
              placeholder="Entregadores"
            />
          </section>
          <SimpleInput
            label="Nome do Produto"
            name="product"
            type="text"
            placeholder="Nome do Produto"
            onKeyPress={e => e.key === 'Enter' ? formRef.current.submitForm() : null}
          />
        </UnForm>
      </Content>
    </Container>
  );
}

