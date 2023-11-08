  'use client'
  // import { Navbar,  } from '../../components';
  import React, { useEffect, useState } from 'react';
  import { client } from '@/sanity/lib/client';
  import { groq } from 'next-sanity';
  import { useParams } from 'next/navigation';
  import { Navbar, ProductDetails
   } from '../../components'


  const ProductPage  = async () => {

    const { slug } = useParams();
    const products = await client.fetch(groq `*[_type=="product"]`);
    
    const product = products.find((product:any)=> product.slug.current == slug);

    return (
      <div>
        <Navbar />
        <ProductDetails product={product} />
      </div>
    )
  }

  export default ProductPage
 