import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarContainer = styled.div`
  align-items: center;

  display: flex;

  justify-content: space-between;

  padding: 0 1rem;
`;

export const BodyContainer = styled.div`
  flex: 1;
`;

export const FooterContainer = styled.div``;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.textPrimary};

  font-weight: 500;

  margin: 0 0.5rem;

  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.textPrimaryHover};

    text-decoration: ${(props) => (typeof props.children === 'string' ? 'underline' : 'none')};
  }

  &.selected {
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;
`;
