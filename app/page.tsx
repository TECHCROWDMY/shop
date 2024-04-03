'use client'

import { Dispatch, createContext, useState, SetStateAction } from 'react';
import { Hero, Navbar, Products } from './components';
// import { StateContext } from './context/stateContext';
import { NextPage } from 'next';

export const AppContext = createContext({
  showCart: true,
  setShowCart: (show: boolean) => {}, // Provide a default function
});

const Home: NextPage = () => {
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

export default Home;

