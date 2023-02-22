import { heroAirpods,heroBanner } from '@/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
 
const Hero = () => {
  return (
    <div className='hero-section'>
          <div className='hero-container'>
              
              <div className='hero-bg'>
                <Image 
                        src={heroBanner}
                        height="100"
                        width="1400"
                        className='mb-40'
                />
              </div>

              <div className='hero-airpods'>
                  <motion.div initial="hidden" animate="visible" variants={{
                      hidden: {x:0, y: 70, opacity:0.25, },
                      visible:{x:0, y: -10, opacity:1, 
                              transition: { delay: 0.05 }},
                      }}>
                    <Image 
                          src={heroAirpods}
                          height="100"
                          width="700"
                    />
                  </motion.div>
              </div>

          </div>
         
    </div>
  )
}

export default Hero