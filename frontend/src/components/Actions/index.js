import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { Container } from './styles';

export default function Actions() {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggle}>
        <MdMoreHoriz size={24} />
      </button>
    </Container>
  );
}
