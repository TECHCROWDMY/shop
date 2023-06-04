import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutLineShopping, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline} from 'react-icons/ti';
import { useStateContext } from '../context/stateContext';
import Image from 'next/image'

const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove }= useStateContext();
 
  const handleCheckout = async () => {
    
  } 
  
  
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={()=>setShowCart(false)} >

          <AiOutlineLeft />
          <span className='heading'>Your cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type='button'
                onClick={()=> setShowCart(false)}
                className="btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        
        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item,index)=>(
            <div className='product'  key={item._id} >
               <Image 
                  src={item?.images[0]}
                  height="100"
                  width="1400"
                  className="cart-product-image"
                  alt={item?.images[0]}
                />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.title}</h5>
                  <h4>{item.price}</h4>
                </div>
                <div className='flex bottom'>
                       <div className='quantity-desc items-center'>
                            <span  
                            className='minus'
                            onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
                                <AiOutlineMinus />
                            </span>
                            <span className='num'>
                                {item.quantity}
                            </span>
                            <span className='plus'
                            onClick={() => toggleCartItemQuantity(item._id, 'inc') }>
                                <AiOutlinePlus />
                            </span>
                      </div> 
                      <button type='button' className='remove-item' onClick={() => onRemove(item)}><TiDeleteOutline /></button>

                </div>
              </div>
            </div>
          ))}

        </div>
        {cartItems.length<=1 &&(
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button
              type='button'
              className='btn'
              onClick={handleCheckout}
              >Pay with Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart