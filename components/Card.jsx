import React from 'react';
import Link from 'next/link';
  
const Card = ({product}) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
          <div className='products-card'>
            <img 
              src={product.images[0]} 
              className="object-cover mx-auto py-5"
              width={350}
            
            />
            <div className='m-5'>
                <h1 className='text-center font-bold text-2xl'>{product.title}</h1>
                <h3 className='text-center font-bold text-xl text-gray-500'>{product.price}</h3>
            </div>
            
          </div>
      </Link>
    </div>
    
  )
}

export default Card