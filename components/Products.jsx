import React from 'react'
import Card from './Card'
import Slider from "react-slick";
 
const Products = () => {

  let courses=[
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
    },
    {
      imgUrl:'https://www.linkinforlife.com/wp-content/uploads/2022/06/airpods-pro-roundup.webp',
      title:'Airpods Pro',
      price:'$249.00',
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
    <div className='w-full bg-[#F8F8F8] py-32'>
        <div className='md:max-w-[1024px] m-auto max-w-[600px]'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Best Selling</h1>
              <p className='text-[#6D737A]'>Enjoy Up To 50%</p>
            </div>
            
            <Slider {...settings} className="px-1">
              {courses.map((course,i)=>
                <div key={i}>
                  <Card course={course} />
                </div> ) }
              

            </Slider>
            
        </div>

    </div>
  )
}

export default Products