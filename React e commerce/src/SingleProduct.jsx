import React, { useState } from 'react'
import Product from './Product'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {
    const { productID } = useParams()
    const [singleProduct, setSingleProduct] = useState({})

    const getProduct = async () => {
        let url = 'http://localhost:5000/products' + productID;
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
            setSingleProduct(data.data)
            console.log(data.data)
        }
        else {
            console.log('problem')
        }
    }





    if (products.length == 0) {
        getProducts()
    }



    return (
        <>
            <Product product={product} />
        </>

    )
}

export default SingleProduct