import React from "react"   ;
import { Navbar, Hero, Products } from "@/components";
import { client } from '../lib/client'
  
export default function Home({products,bannerData}) {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Products products={products}/>
 
    </div>
  )
}



export const getServerSideProps = async () => {
  const query ='*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery ='*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}

  }
}
