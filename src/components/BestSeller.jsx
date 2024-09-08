import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProducItem from './ProducItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSaller, setBestSaller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSaller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
    <div className="text-center text-3xl py-8">
      <Title text1={'BEST'} text2={'SELLER'} />
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vel, iste facilis accusantium optio excepturi doloribus consectetur in, unde fugiat esse. Repudiandae ad dolore cumque similique molestiae, repellat alias culpa!
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {/* {
        bestSaller.map((item,index)=>(
          <ProducItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))
      } */}
      {
        bestSaller.map((item,index)=>(
          <ProducItem key={index} id={item._id} name={item.name}  image={item.image} price={item.price} />
        ))
      }
    </div>
    </div>
  )
}

export default BestSeller
