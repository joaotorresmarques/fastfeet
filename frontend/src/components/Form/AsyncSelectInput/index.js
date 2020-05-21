import React, { useRef, useEffect } from 'react';
import Select from 'react-select/async';

import { useField } from '@unform/core';

import { Container, Label, Error } from './styles';

export default function AsyncSelectInput({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
    })
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select
        defaultValue={defaultValue}
        ref={selectRef}
        {...rest}
      />
    </Container>
  );
}
