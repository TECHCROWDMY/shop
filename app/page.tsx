'use client'

import { Dispatch, createContext, useState, SetStateAction } from 'react';
import { Hero, Navbar, Products } from './components';

export const AppContext = createContext({
  showCart: true,
  setShowCart: (show: boolean) => {},
});

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
