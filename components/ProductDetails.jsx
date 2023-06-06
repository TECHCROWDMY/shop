import React,{useState} from 'react';
import Image from 'next/image';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useStateContext } from '../context/stateContext';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { urlFor, client } from '@/lib/client';

const ProductDetails = ({product}) => {

    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const router = useRouter()
    const [dataIndex, setDataIndex] = useState(0)
    console.log(product)
  
  
  return (
    <div className='product-details-section'>
        <div className='product-details-container'>

            <div>
                <div className='img-container h-[450px] flex items-center mb-[25px]'>
                  <Image 
                      loader={() => urlFor(product.image && product.image[index]).url()} 
                      src={urlFor(product.image && product.image[index]).url()} 
                      width={350}
                      height={350}
                      className="object-cover mx-auto"
                      alt={product.image[0]} 
                  />  
                </div>


                <div className="small-images-container">
                    {product.image?.map((item, i) => (
                        <Image 
                            key={i}
                            loader={() => urlFor(product.image && product.image[i]).url()} 
                            src={urlFor(product.image && product.image[i]).url()} 
                            width={220}
                            height={100}
                            className="object-cover h-32  mx-auto border rounded-xl"
                            alt={product.image[i]} 
                            onClick={() => setIndex(i)}
                        />  
                    ))}
                </div> 
            </div> 
            <div className='flex flex-col gap-8 md:pt-32 pt-0'>
                
                <div  className='flex flex-col gap-4'>
                    <div className='text-3xl font-bold'>{product.name}</div>
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
                
                <button className='btn add-to-cart'  onClick={() => onAdd(product, qty)}>Add To Cart</button>

 
            </div>


        </div>
    </div>
  )
}

export default ProductDetails
 