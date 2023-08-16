import React, { useState, useEffect } from 'react'
import Product from './Product'

const Products = (props) => {
    const [products, setProducts] = useState([]);





    const getProducts = async () => {
        let url = 'http://localhost:5000/products';
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        const res = await fetch(url, options)
        const data = await res.json();
        // console.group(data)
        if (data.status === 'Ok') {

            setProducts(data.product)
            console.log(data.data)


        }
        else {
            console.log('problem')
        }
    }

    useEffect(()=>{}, [ ])



    if (products.length == 0) {
        getProducts()
    }


    if (products.length != 0) {
        console.log(products[0].id)
        console.log(products[0]['category'])
        return (


                    <>
                        <h1>test</h1>
                        {products.map((product, index) => <Product key={index} product={product} />)}
                    </>
            
            
        )
    }




}


export default Products