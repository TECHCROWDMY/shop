import { useStateContext } from '../context/stateContext';
import React from 'react';
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart';

const Navbar = () => {
  const {totalQuantities,setShowCart, showCart} = useStateContext();

  return (
    <div className='w-full h-[80px] border-b bg-white '>
        <div className='container w-full h-full flex justify-between items-center'>
            
            {/* <img src={logo} className="h-[18px] opacity-[65%]" /> */}
            <h1 className='font-urbanist font-black text-2xl'>Shop</h1>
            
            <button type='button' className='cart-icon' 
            onClick={()=>setShowCart(true)}><AiOutlineShopping />
              <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            {showCart && <Cart /> }
            
        </div>
    </div>
  )
}

export default Navbar