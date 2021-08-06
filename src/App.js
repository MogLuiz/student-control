import React from 'react'
import { Router } from 'react-router-dom'

import history from './services/history';
import Routes from './routes';
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
