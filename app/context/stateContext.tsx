'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { toast } from 'react-hot-toast';

const Context = createContext({});

type Props = {
  children: ReactNode;
};

export const StateContext = ({ children } : Props ) => {
 
  const [showCart, setShowCart] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [totalQuantities, setTotalQuantities] = useState(0);
  // const [qty, setQty] = useState(1);

  // let foundProduct:any;
  // let index;

  // const onAdd = (product:any, quantity:any) => {
  //   const checkProductInCart = cartItems.find((item:any) => item._id === product._id);
    
  //   setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
  //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
  //   if(checkProductInCart) {
  //     const updatedCartItems:any = cartItems.map((cartProduct:any) => {
  //       if(cartProduct._id === product._id) return {
  //         ...cartProduct,
  //         quantity: cartProduct.quantity + quantity
  //       }
  //     })

  //     setCartItems(updatedCartItems);
  //   } else {
  //     product.quantity = quantity;
      
  //     setCartItems([...cartItems, { ...product }]);
  //   }

  //   toast.success(`${qty} ${product.name} added to the cart.`);
  // } 

  // const onRemove = (product:any) => {
  //   foundProduct = cartItems.find((item:any) => item._id === product._id);
  //   const newCartItems = cartItems.filter((item:any) => item._id !== product._id);

  //   setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
  //   setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
  //   setCartItems(newCartItems);
  // }

  // const toggleCartItemQuantity = (id:any, value:any) => {
  //   foundProduct = cartItems.find((item:any) => item._id === id)
  //   index = cartItems.findIndex((product) => product._id === id);
  //   const newCartItems = cartItems.filter((item:any) => item._id !== id)

  //   if(value === 'inc') {
  //     setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
  //     setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
  //   } else if(value === 'dec') {
  //     if (foundProduct.quantity > 1) {
  //       setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
  //       setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
  //     }
  //   }
  // }

  // const incQty = () => {
  //   setQty((prevQty) => prevQty + 1);
  // }

  // const decQty = () => {
  //   setQty((prevQty) => {
  //     if(prevQty - 1 < 1) return 1;
     
  //     return prevQty - 1;
  //   });
  // }

  const states = {
    showCart,
    setShowCart,
    // cartItems,
    // totalPrice,
    // totalQuantities,
    // qty,
    // incQty,
    // decQty,
    // onAdd,
    // toggleCartItemQuantity,
    // onRemove,
    // setCartItems,
    // setTotalPrice,
    // setTotalQuantities 
  };


  return (
    <Context.Provider value={{ states }} >
      {children}
    </Context.Provider>
  ) 
  
}

export const useStateContext = () => useContext(Context);