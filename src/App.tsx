import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
};

export default App;
