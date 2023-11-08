'use client'
import React, { useContext } from 'react'
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Card from './Card';

const Products = async () => {

    const products = await client.fetch(groq `*[_type=="product"]`)

    return (
        <div className='bg-[#f8f8f8] w-full py-12 mt-[125px]'>
            <div className='container'>
                <div className='py-4'>
                    <h1 className='text-3xl font-bold'>Best Selling Products</h1>
                    <h1>Enjoy Up To 50%</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6'>
                    {products.map((product:any,index:number)=>(
                        <Card key={index} product={product} />
                    )) 
                    } 
                </div>



            </div>
        </div>
    )
}

export default Products