"use client";

import {useRouter} from 'next/navigation';


export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Order placed");
        router.replace("/")
    }
    return (
        <>
        
          <h1>Order Product</h1>
          <button onClick={handleClick}>Place order</button>
     </>  
  )
}
