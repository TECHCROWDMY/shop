'use client'

import React,{useState} from 'react';
import Image from 'next/image';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
// import { useStateContext } from '../context/stateContext';
import { urlForImage } from '@/sanity/lib/image';

const ProductDetails = ({product}:any) => {

    const [index, setIndex] = useState(0);
    // const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  
  return (
    <div className='product-details-section'>
        <div className='product-details-container'>

            {/* LEFT SECTION */}
            <div>

                {/* TOP SECTION */}
                <div className='img-container h-[450px] flex items-center mb-[25px]'>
                  <Image 
                      loader={() => urlForImage(product.images && product.images[index]).url()} 
                      src={urlForImage(product?.images && product.images[index]).url()} 
                      width={350}
                      height={350}
                      className="object-cover mx-auto"
                      alt={product.images[0]} 
                  />  
                </div>

                {/* BOTTOM SECTION */}
                <div className="small-images-container">
                    {product.images?.map((item:any, i:number) => (
                        <Image 
                            key={i}
                            loader={() => urlForImage(product.images && product.images[i]).url()} 
                            src={urlForImage(product.images && product.images[i]).url()} 
                            width={220}
                            height={100}
                            className="object-cover h-32  mx-auto border rounded-xl hover:cursor-pointer"
                            alt={product.images[i]} 
                            onClick={() => setIndex(i)}
                        />  
                    ))}
                </div> 
            </div>

            {/* RIGHT SECTION */}
            <div className='flex flex-col gap-8 md:pt-32 pt-0'>
                
                <div  className='flex flex-col gap-4'>
                    <div className='text-3xl font-bold'>{product.name}</div>
                    <div className='text-xl font-medium'>{product.price}</div>
                </div>


                <div className="quantity flex gap-2 items-center">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc flex items-center border border-black">
                        <span
                            className="minus" 
                            // onClick={decQty}
                        >
                            <AiOutlineMinus />
                        </span>
                        <span
                            className="num"
                        >
                            {/* {qty} */}
                        </span>
                        <span
                            className="plus"
                            // onClick={incQty}
                        >   
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                
                <button className='btn add-to-cart' 
                    // onClick={() =>  onAdd(product, qty)}
                > Add To Cart
                </button>


 
            </div>

        </div>
    </div>
  )
}

export default ProductDetails
 