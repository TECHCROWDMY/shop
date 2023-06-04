import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor, client } from '@/lib/client';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';


const Card = ({product}) => {
  const imageProps = useNextSanityImage(client, product.image);
  const src = urlFor(product.image && product.image[0]).url()

  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
          <div className='products-card'> 
                <Image 
                  loader={() => src} 
                  src={urlFor(product.image && product.image[0]).url()} 
                  width={220}
                  height={100}
                  className="object-cover h-32  mx-auto "
                  alt={product.image[0]} 
                />  
            <div className='py-10'>
                <h1 className='text-center font-bold text-2xl'>{product.name}</h1>
                <h3 className='text-center font-bold text-xl text-gray-500'>${product.price}</h3>
            </div>
            
          </div>
      </Link>
    </div>  
  )
}

export default Card