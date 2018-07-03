// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';

const Routes = () => (
  <Switch>
    {/* add additional routes here */}
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
