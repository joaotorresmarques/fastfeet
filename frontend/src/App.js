import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
