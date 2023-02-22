import React,{useState} from 'react';
import Image from 'next/image';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';



const ProductDetails = ({product}) => {

    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <div className='product-details-section'>
        <div className='product-details-container border border-black'>

            <div className='border border-black p-24'>
                <div>
                    <img 
                        src={product.imgUrl} 
                        className="object-cover mx-auto py-5"
                        width={350}
                 
                    />
                   
                </div>

                <div>
                    
                </div>



            </div>


            <div className='flex flex-col gap-8'>
                
                <div  className='flex flex-col gap-4'>
                    <div className='text-3xl font-bold'>{product.title}</div>
                    <div className='text-xl font-medium'>{product.price}</div>
                </div>


                <div className="quantity flex gap-2 items-center">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc flex items-center border border-black">
                        <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                    </p>
                </div>
                
                <button className='btn add-to-cart'>Add To Cart</button>

 
            </div>


        </div>
    </div>
  )
}

export default ProductDetails