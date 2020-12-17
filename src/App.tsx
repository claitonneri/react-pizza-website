import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import Hero from './components/Hero';
import Products from './components/Products';

import { products } from './helpers/products';
import { sweets } from './helpers/sweets';

import Feature from './components/Feature';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" products={products} />
      <Feature />
      <Products heading="Sweet Treats for You" products={sweets} />
    </Router>
  );
};

export default App;
