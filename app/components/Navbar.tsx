
import Link from 'next/link'
import React, { useContext } from 'react'
import {FiShoppingBag} from 'react-icons/fi'
// import { useStateContext } from '../context/stateContext'
import { AppContext } from '../page';

const Navbar = () => {

  const { showCart, setShowCart } = useContext(AppContext);
  console.log(showCart);

  return (
    <>
      <div className='w-full h-[80px] bg-white '>
          <div className='container w-full h-full flex justify-between items-center'>
              <Link href='/' className='logo'>Shop</Link>
              <button className='cart-icon'
               onClick={()=>setShowCart(!showCart)}
               >
                  <FiShoppingBag />
                  <span className='cart-item-qty'>0</span>
              </button>
          </div>
      </div>

    </>

  )
}

export default Navbar