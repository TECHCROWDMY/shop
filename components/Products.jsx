import React from 'react'
import Card from './Card'
import Slider from "react-slick";
 
const Products = () => {

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