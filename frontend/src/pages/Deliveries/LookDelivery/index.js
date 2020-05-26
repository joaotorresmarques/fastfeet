import React from 'react';

// import { Container } from './styles';

export default function LookDelivery({ delivery }) {
  const {
    product,
    start_date,
    end_date,
    canceled_at,
    recipient,
    problems,
    signature
  } = delivery;

  return <h1>{product}</h1>;
}
