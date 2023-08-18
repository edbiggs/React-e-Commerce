import React from 'react'
import Product from './Product'

const MyCart = (cart,setCart) => {


  return (
    <>
        {cart.map((product, index) => <Product key={index} product={product} setCart={setCart} cart={cart} user={user}/>)}

    </>
  )
}

export default MyCart