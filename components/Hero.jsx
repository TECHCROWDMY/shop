import { heroAirpods,heroBanner } from '@/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
 
const Hero = () => {
  return (
    <div className='w-full h-[600px] flex items-center'>
          <div className='md:max-w-[1024px] h-full mx-auto max-w-[600px] flex justify-center relative items-center px-16 md:px-0'>
              
              <div className='w-full items-center object-cover py-50'>
                <Image 
                        src={heroBanner}
                        height="100"
                        width="1400"
                        className='mb-40'
                />
              </div>

              <div className='absolute top-0 w-full h-full flex  justify-center mt-[200px]'>
                  <motion.div initial="hidden" animate="visible" variants={{
                      hidden: {
                        x: 0,
                        y: 70, 
                        opacity:0.25, 
                      },
                      visible: {
                        x: 0,
                        y: -10, 
                        opacity:1, 
                        transition: {
                          delay: 0.05
                        }
                      },
                    }}>
                    <Image 
                          src={heroAirpods}
                          height="100"
                          width="700"
                          className=''
                    />
                  </motion.div>
              </div>

              
                  
            
          </div>
         
              
      
      {/* <div className='md:max-w-[1024px] m-auto max-w-[600px] border border-black '>

                    
                    <h1 className='absolute top-0 flex items-center justify-center text-[100px]'>ALL NEW</h1>
          
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center p-4'>
                  
                  <div className='flex items-center  w-full mx-auto'>


                    

                    </div> 
                  
                  <div className='absolute top-0 w-full h-full flex flex-col justify-center 
                    text-center md:text-[300px] text-[100px]'></div>
                  
                  



          </div> 
      </div> */}
      
    </div>
  )
}

export default Hero