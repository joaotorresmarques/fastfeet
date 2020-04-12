import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Order from '../pages/Order';

import Deliveryman from '../pages/Deliveryman';

import Recipient from '../pages/Recipient';

import Problem from '../pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" exact component={Order} isPrivate />

      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />

      <Route path="/recipient" exact component={Recipient} isPrivate />

      <Route path="/problem" exact component={Problem} isPrivate />
    </Switch>
  );
}
