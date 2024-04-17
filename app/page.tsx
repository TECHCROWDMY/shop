'use client'

import { useState, createContext } from 'react';
import { Hero, Navbar, Products } from './components';
import { AppContext } from './context/AppContext';

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  console.log(showCart);

  return (
    <AppContext.Provider value={{ showCart, setShowCart }}>
      <Navbar />
      <Hero />
      <Products />
    </AppContext.Provider>
  )
}
