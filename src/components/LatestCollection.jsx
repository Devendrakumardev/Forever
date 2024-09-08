import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProducItem from './ProducItem';

 
const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct,setLatestProduct] = useState([]);
  

    useEffect(()=>{
      setLatestProduct(products.slice(0,10));
       
    },[]);
  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl" >
      <Title text1={'LATEST'} text2={'COLLLECTION'} />
      <p className='w-3/4 m-auto text-xm sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit ame
      t consectetur adipisicing elit. Quae illum officiis dig
      nissimos, eos expedita veniam numquam quis sit hic, autem provide
      nt illo dolor necessitatibus dicta temporibus libero sed, laudantium velit.</p>
      </div>
      {/* Rendering product */}
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProduct.map((item,index)=>(
            <ProducItem key={index}  id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection;
