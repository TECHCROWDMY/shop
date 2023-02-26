import { Navbar, ProductDetails } from '@/components';
import React from 'react';
import { useRouter } from 'next/router';

const ProductPage  = () => {

  let products=[
    {
       images:[
        'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
        'https://i5.walmartimages.com/asr/d72c2f35-3302-4073-bec4-3e9a92cd3464.9f1543f4f9b2c0d3d63b8ea103d384ca.jpeg',
        'https://i5.walmartimages.com/asr/7e8598be-0a04-4938-98be-765f1fe80447.2f2187eed7001354fb4911fe454dc0d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      ],
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-1',
    },
    {
      images:[
       'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
       'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
       'https://i5.walmartimages.com/asr/d72c2f35-3302-4073-bec4-3e9a92cd3464.9f1543f4f9b2c0d3d63b8ea103d384ca.jpeg',
       'https://i5.walmartimages.com/asr/7e8598be-0a04-4938-98be-765f1fe80447.2f2187eed7001354fb4911fe454dc0d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
     ],
     title:'Airpods Pro',
     price:'$249.00',
     slug:'airpods-pro-2',
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