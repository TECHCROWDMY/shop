import React,{useState} from 'react';
import Image from 'next/image';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useStateContext } from '../context/stateContext';


const ProductDetails = ({product}) => {

    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <div className='product-details-section'>
        <div className='product-details-container'>

            <div className=''>
                <div className='img-container h-[350px] flex items-center mb-[25px]'>
                    <img 
                        src={product.images[0] && product.images[index]} 
                        className=" mx-auto "
                        width={350}
                 
                    />
                   
                </div>


                <div className="small-images-container">
                    {product.images?.map((item, i) => (
                    <img 
                        key={i}
                        src={item}
                        className={i === index ? 'small-image selected-image ' : 'small-image'}
                        onClick={() => setIndex(i)}
                    />
                    ))}
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
                
                <button className='btn add-to-cart'  onClick={() => onAdd(product, qty)}>Add To Cart</button>

 
            </div>


        </div>
    </div>
  )
}

export default ProductDetails