import Link from 'next/link'
import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white '>
        <div className='container w-full h-full flex justify-between items-center'>
            <Link href='/' className='logo'>Shop</Link>
            <button className='cart-icon'>
                <FiShoppingBag />
                <span className='cart-item-qty'>0</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar