import { Link } from 'react-router-dom';

import Routes from './Routes';
import { AppBarContainer, BodyContainer, FooterContainer, Wrapper } from './Styles';

const Project = () => {
  return (
    <Wrapper>
      <AppBarContainer>
        <Link to="/">
          <h1>XLEXTENDS</h1>
        </Link>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <Link to="/catalog">
          <button type="button">Catalog</button>
        </Link>
        <Link to="/booking">
          <button type="button">Booking</button>
        </Link>
        <Link to="/contact">
          <button type="button">Get in touch</button>
        </Link>
        <Link to="/cart">
          <button type="button">Cart</button>
        </Link>
      </AppBarContainer>
      <BodyContainer>
        <Routes />
      </BodyContainer>
      <FooterContainer>Footer</FooterContainer>
    </Wrapper>
  );
};

export default Project;
