import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { Container } from './styles';

export default function Actions() {
  return (
    <Container>
      <button type="button" onClick={() => {}}>
        <MdMoreHoriz size={24} />
      </button>
    </Container>
  );
}
