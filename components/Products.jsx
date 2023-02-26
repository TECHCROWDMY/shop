import React from 'react'
import Card from './Card'
import Slider from "react-slick";
 
const Products = () => {

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


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='products-section'>
        <div className='products-container'>
            
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Best Selling</h1>
              <p className='text-[#6D737A]'>Enjoy Up To 50%</p>
            </div>
            
            <Slider {...settings} className="px-1">
              {products.map((product,i)=>
                <div key={i}>
                  <Card product={product} />
                
                </div> ) }
              

            </Slider>
            
        </div>

    </div>
  )
}

export default Products