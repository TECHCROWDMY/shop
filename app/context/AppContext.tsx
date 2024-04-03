import { createContext } from 'react';

export const AppContext = createContext({
    showCart: true,
    setShowCart: (show: boolean) => {}, // Provide a default function
  });