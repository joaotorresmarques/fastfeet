import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Delivery from '../pages/Delivery';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" component={Delivery} />
    </Switch>
  );
}