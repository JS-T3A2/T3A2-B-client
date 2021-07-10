import { Route, Switch } from 'react-router-dom';

import { Admin } from '../Admin';
import { Project } from '../Project';

const Routes = () => (
  <Switch>
    <Route component={Admin} exact path="/admin" />
    <Route component={Project} path="/" />
  </Switch>
);

export default Routes;
