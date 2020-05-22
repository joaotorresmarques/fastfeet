import React from 'react';

import { Form, Input } from './styles';

export default function SearchInput({ callback, placeholder = '' }) {
  return (
    <Form>
      <Input type="text" name="search" placeholder={placeholder} />
    </Form>
  );
}
