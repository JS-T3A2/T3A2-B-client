import { useDevice } from '@hooks';

//  TODO: Separate app bar into its own file.
// import { AppBar } from './components';
import Routes from './Routes';
import { AppBarContainer, BodyContainer, FooterContainer, StyledLink, Wrapper } from './Styles';

const Project = () => {
  const { display } = useDevice();

  return (
    <Wrapper>
      <AppBarContainer>
        <div style={{ flex: 1 }}>
          <StyledLink to="/">
            <h1>XLEXTENDS</h1>
          </StyledLink>
        </div>
        {display === 'desktop' && (
          <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <StyledLink activeClassName="selected" exact to="/">
              Home
            </StyledLink>
            <StyledLink activeClassName="selected" to="/catalog">
              Catalog
            </StyledLink>
            <StyledLink activeClassName="selected" to="/bookings">
              Bookings
            </StyledLink>
            <StyledLink activeClassName="selected" to="/contact">
              Contact
            </StyledLink>
          </div>
        )}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <StyledLink activeClassName="selected" to="/cart">
            <button>Cart</button>
          </StyledLink>
        </div>
        {display !== 'desktop' && <button>BURGUR</button>}
        {/* TODO: Separate app bar into its own file. */}
        {/* <AppBar /> */}
      </AppBarContainer>
      <BodyContainer>
        <Routes />
      </BodyContainer>
      <FooterContainer>Footer</FooterContainer>
    </Wrapper>
  );
};

export default Project;
