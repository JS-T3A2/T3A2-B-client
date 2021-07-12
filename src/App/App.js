import { useQuery } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useActions } from '@hooks';
import theme from '@theme';
import { getStoredAuthToken, IS_AUTH } from '@utils';

import GlobalStyle from './GlobalStyle';
import Routes from './Routes';
import { RootWrapper } from './Styles';

const App = () => {
  const { setAdminData } = useActions();
  const { data } = useQuery(IS_AUTH, { fetchPolicy: 'no-cache' });

  useEffect(() => {
    if (data) {
      if (!data.isAuth) {
        setAdminData(false);
      } else {
        setAdminData(jwt_decode(getStoredAuthToken()));
      }
    }
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <RootWrapper>
        <GlobalStyle />
        <Routes />
      </RootWrapper>
    </ThemeProvider>
  );
};

export default App;
