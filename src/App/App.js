import { ThemeProvider } from 'styled-components';

import theme from '@theme';

import GlobalStyle from './GlobalStyle';
import Routes from './Routes';
import { RootWrapper } from './Styles';

const App = () => {
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
