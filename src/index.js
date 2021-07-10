import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '@store';
import { client } from '@utils';

import { App } from './App/index';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
