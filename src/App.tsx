import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
};

export default App;
