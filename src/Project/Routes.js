import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/cart">
      CARt
    </Route>
    <Route exact path="/catalog">
      Hello
    </Route>
    <Route exact path="/">
      Home
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
