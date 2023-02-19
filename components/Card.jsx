import React from 'react'
  
const Card = ({course}) => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-lg mr-2 my-4 p-5'>
        <img 
          src={course.imgUrl} 
          className="object-cover mx-auto py-5"
          width={350}
        
        />
        <div className='m-5'>
            <h1 className='text-center font-bold text-2xl'>{course.title}</h1>
            <h3 className='text-center font-bold text-xl text-gray-500'>{course.price}</h3>
         </div>
         
    </div>
  )
}

export default Card