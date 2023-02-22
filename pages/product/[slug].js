import { Navbar, ProductDetails } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';

const ProductPage  = () => {

  let products=[
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-1',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-2',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-3',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-4',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-5',
    },
  ]


  const {slug}  = useRouter().query
 
   let product = products.filter(product=> product.slug == slug)
   console.log(product)


  return (
    <div>
        <Navbar />
        <ProductDetails product={product[0]}/>
    </div>
  )
}

export default ProductPage