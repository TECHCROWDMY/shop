import React,{useState} from 'react';
import Image from 'next/image';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { useStateContext } from '../context/stateContext';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
 
const ProductDetails = () => {

    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const router = useRouter()
    const [dataIndex, setDataIndex] = useState(0)


    useEffect(() => {
        if (!router.isReady) return
        const { slug } = router.query
        setDataIndex(products.findIndex(e => e.slug == slug))
       }, [router.isReady, router.query])

      

  return (
    <div className='product-details-section'>
        <div className='product-details-container'>

            <div className=''>
                <div className='img-container h-[350px] flex items-center mb-[25px]'>
                     
                    <Image 
                        src={products[dataIndex].images[index]} 
                        className=" mx-auto "
                        width={350}
                        height={100}
                        alt="product image" 
                    />
                </div>


                <div className="small-images-container">
                    {products[dataIndex].images?.map((item, i) => (
                     
                    <Image
                        key={i}
                        src={item}
                        width={350}
                        height={100} 
                        className={i === index ? 'small-image selected-image ' : 'small-image'}
                        onClick={() => setIndex(i)}
                        alt='sample images'
                    />
                    ))}
                </div>



            </div>


            <div className='flex flex-col gap-8'>
                
                <div  className='flex flex-col gap-4'>
                    <div className='text-3xl font-bold'>{products[dataIndex].title}</div>
                    <div className='text-xl font-medium'>{products[dataIndex].price}</div>
                </div>


                <div className="quantity flex gap-2 items-center">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc flex items-center border border-black">
                        <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                    </p>
                </div>
                
                <button className='btn add-to-cart'  onClick={() => onAdd(products[dataIndex], qty)}>Add To Cart</button>

 
            </div>


        </div>
    </div>
  )
}

export default ProductDetails

 let products=[
    {
       images:[
        '/images/cardAirpods.png',
        '/images/cardAirpods2.jpeg',
        '/images/cardAirpods3.png',
        '/images/cardAirpods4.png',
      ],
      title:'Airpods Pro',
      price:'$249.00',
      slug:'airpods-pro-1',
    },
    {
      images:[
       '/images/cardAirpods.png',
       '/images/cardAirpods2.jpeg',
       '/images/cardAirpods3.png',
       '/images/cardAirpods4.png',
     ],
     title:'Airpods Pro',
     price:'$249.00',
     slug:'airpods-pro-2',
   },
   {
    images:[
     '/images/cardAirpods.png',
     '/images/cardAirpods2.jpeg',
     '/images/cardAirpods3.png',
     '/images/cardAirpods4.png',
   ],
   title:'Airpods Pro',
   price:'$249.00',
   slug:'airpods-pro-3',
 },
 {
  images:[
   '/images/cardAirpods.png',
   '/images/cardAirpods2.jpeg',
   '/images/cardAirpods3.png',
   '/images/cardAirpods4.png',
 ],
 title:'Airpods Pro',
 price:'$249.00',
 slug:'airpods-pro-4',
},
{
    images:[
    '/images/cardAirpods.png',
    '/images/cardAirpods2.jpeg',
    '/images/cardAirpods3.png',
    '/images/cardAirpods4.png',
  ],
  title:'Airpods Pro',
  price:'$249.00',
  slug:'airpods-pro-5',
  },
    
]