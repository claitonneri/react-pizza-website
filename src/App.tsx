import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import Hero from './components/Hero';
import Products from './components/Products';

import { products } from './helpers/products';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" products={products} />
    </Router>
  );
};

export default App;
