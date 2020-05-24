import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';

import * as Yup from 'yup';

import { Form, Input } from './styles';

const schema = Yup.object().shape({
  search: Yup.string(),
});

export default function SearchInput({ callback, placeholder = '' }) {
  const [searching, setSearching] = useState(false);

  async function handleSubmit({ search }) {
    setSearching(true);
    await callback(search);
    setSearching(false);
  }
  
  return (
    <Form
      schema={schema}
      onSubmit={handleSubmit}
      searching={searching ? searching.toString() : undefined}
    >
      {searching ? (
        <AiOutlineLoading color="#999999"/>
      ) : (
        <MdSearch color="#999999" />
      )}
      <Input type="text" name="search" placeholder={placeholder} />
    </Form>
  );
}
