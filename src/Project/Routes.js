import { Redirect, Route, Switch } from 'react-router-dom';

import { Bookings } from './Bookings';
import { Cart } from './Cart';
import { Catalog } from './Catalog';
import { Contact } from './Contact';
import { Home } from './Home';

const Routes = () => (
  <Switch>
    <Route component={Cart} exact path="/cart" />
    <Route component={Bookings} exact path="/bookings" />
    <Route component={Catalog} exact path="/catalog" />
    <Route component={Contact} exact path="/contact" />
    <Route component={Home} exact path="/" />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
