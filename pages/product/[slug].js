import { Navbar, ProductDetails } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';
import { client } from '@/lib/client';

const ProductPage  = ({products}) => {
  
  const {slug}  = useRouter().query
  let product = products.filter(product=> product.slug.current == slug)

  return (
    <div>
        <Navbar />
        <ProductDetails product={product[0]} />
    </div>
  )
}

export default ProductPage

export const getServerSideProps = async () => {
  const query ='*[_type == "product"]';
  const products = await client.fetch(query);

  
  return {
    props: {products}

  }
}