import React, { useState } from 'react'
import Product from './Product'

const Products = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let url = 'http://localhost:5000/products';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch(url, options)
        const data = await res.json();
        // console.group(data)
        if (data.status === 'ok') {

            setProducts(data.data)
            console.log(data.data)
        }
        else {
            console.log('problem')
        }
    }

    // useEffect(()=>{}, [ ])

    if (products.length == 0) {
        console.log('getting products')
        getProducts()
        console.log(products)
    }

    if (products.length != 0) {
        console.log(products)
        console.log(products[0]['category'])
        
        return (
            <>
                <h1>test</h1>
                {products.map((product, index) => <Product key={index} product={product} setCart={props.setCart} cart={props.cart} user={props.user}/>)}
                
            </>


        )
    }

    }





export default Products