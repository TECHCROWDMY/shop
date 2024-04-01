"use client"

import { createContext, useState } from "react";


export const CartContext = createContext({});

export const CartProvider = ({children}:any) =>{

    const [showCart,setShowCart] = useState(false);
    const [qty, setQty] = useState(1);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const incQty = () =>{
        setQty((prevQty)=> prevQty + 1)
    }

    const decQty = () =>{
        setQty((prevQty)=> {
            if(prevQty-1 < 1 ) return 1;
            return prevQty - 1;
        })
    }

    const addProduct = (product:any, quantity:number) =>{

        const checkProductInCart = cartItems.find((item:any)=>item._id === product._id);
        setTotalQuantity((prev)=>prev+quantity);
        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price*quantity)

        if(checkProductInCart){
            const updatedCartItems = cartItems.map((cartProduct:any)=>{
                if(cartProduct._id === product._id)
                {
                   return { 
                        ...cartProduct,
                        quantity:cartProduct.quantity + quantity
                    }  
                } else{
                    return cartProduct;
                }
            });
            setCartItems(updatedCartItems);


        }else{
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }

    }

    const toggleCartItemQty = (id:any, value:any) =>{
        let foundProduct = cartItems.find((item)=> item._id === id);
        const index = cartItems.findIndex((product)=>product._id === id);
        const updatedCartItems = [...cartItems];

        if(value === 'plus'){
            updatedCartItems[index] = { ...updatedCartItems[index], quantity:updatedCartItems[index].quantity + 1 }
            setCartItems([...updatedCartItems]);
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + foundProduct.price);
            setTotalQuantity((prevTotalQty) => prevTotalQty + 1)

        }else if(value === 'minus'){
            if(foundProduct.quantity > 1 ){
                updatedCartItems[index] = { ...updatedCartItems[index], quantity:updatedCartItems[index].quantity - 1 }
                setCartItems([...updatedCartItems]);
                setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price);
                setTotalQuantity((prevTotalQty) => prevTotalQty - 1);
            }

        }

    }

    const onRemove = (product:any) => {
        let foundProduct = cartItems.find((item)=> item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setCartItems(newCartItems);
        setTotalPrice((prevTotal) => prevTotal - foundProduct.price*foundProduct.quantity)
        setTotalQuantity((prevTotalQty) => prevTotalQty - foundProduct.quantity);

    }


    return(
        <CartContext.Provider
         value={{onRemove, toggleCartItemQty, totalPrice, totalQuantity, showCart, setShowCart, qty, incQty, decQty, cartItems, addProduct}}
        >
            <div>{children}</div>

        </CartContext.Provider>
    )

}
