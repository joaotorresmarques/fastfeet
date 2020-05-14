import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchList({ ...rest }) {
  return (
    <Container>
      <MdSearch color="#999" size={16} />
      <input {...rest} />
    </Container>
  );
}
