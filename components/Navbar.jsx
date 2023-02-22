import React from 'react';
import {RiShoppingBag3Line} from 'react-icons/ri'

const Navbar = () => {

  return (
    <div className='w-full h-[80px] border-b bg-white '>
        <div className='container w-full h-full flex justify-between items-center'>
            
            {/* <img src={logo} className="h-[18px] opacity-[65%]" /> */}
            <h1>Shop</h1>
            <RiShoppingBag3Line />
            
        </div>
    </div>
  )
}

export default Navbar