import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Delivery from '../pages/Delivery';
import SignIn from '../pages/SignIn';
import DeliveryForm from '../pages/Delivery/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/form" exact component={DeliveryForm} isPrivate />
    </Switch>
  );
}