import { Route, Switch } from 'react-router-dom';

import { Auth } from '../Auth';

const Routes = () => (
  <Switch>
    <Route component={Auth} exact path="/admin/authenticate" />
  </Switch>
);

export default Routes;
