import React, { useContext } from 'react'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'
import { CartContext } from '../context/CartContext';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const Cart = () => {

  const { onRemove, toggleCartItemQty, totalPrice, totalQuantity, cartItems, showCart, setShowCart}:any = useContext(CartContext);

  const handleClose = () =>{
    setShowCart(!showCart);
  }

  const handleCheckout = async () => {
    try {
        const response = await fetch('/api/checkout',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({products:cartItems}),
        });
        const data = await response.json();
        if(data.url){
          window.location.href = data.url
        }
    } catch (error) {
      console.error("Error during checkout", error)
    }




  }


  return (
    <div className='cart-wrapper'>
        <div className='cart-container'>
                <button className='cart-heading' onClick={handleClose}>
                    <AiOutlineLeft/>
                    <span className='heading'>Your Cart</span>
                    <span className='cart-num-items'>{totalQuantity}</span>
                </button>
                <div className='product-container'>
                  {cartItems.map((product:any)=>(
                    <div className='product' key={product._id}>
                      <Image
                        loader={()=>urlForImage(product.images[0]).url()}
                        src={urlForImage(product.images[0]).url()}
                        alt={product.images[0]}
                        width={200}
                        height={200}
                        className='object-cover'
                      />
                      <div className='item-desc'>
                        <div className='flex top'>
                          <h5>{product.name}</h5>
                          <h4>{product.price}</h4>
                        </div>
                        <div className='flex bottom'>
                          <div className='quantity-desc'>
                            <span className='minus'  onClick={()=> toggleCartItemQty(product._id,'minus')}>
                              <AiOutlineMinus />
                            </span>
                            <span className='num'>
                             {product.quantity}
                            </span>
                            <span className='plus' onClick={()=> toggleCartItemQty(product._id,'plus')}>
                              <AiOutlinePlus />
                            </span>
                          </div>
                          <button type='button' onClick={()=>onRemove(product)}
                            className='remove-item'
                          >
                            <TiDeleteOutline />
                          </button>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
                {cartItems.length>0 &&
                  <div className='cart-bottom'>
                      <div className='total'>
                        <h3>Subtotal</h3>
                        <h3>${totalPrice}</h3>
                      </div>
                      <div className='btn-container'>
                        <button onClick={handleCheckout} type='button' className='checkout-btn'>
                          Pay with stripe
                        </button>
                      </div>
                  </div>
                }
        </div>
    </div>
  )
}

export default Cart