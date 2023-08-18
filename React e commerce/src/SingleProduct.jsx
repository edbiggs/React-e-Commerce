import React, { useState } from 'react'
import Product from './Product'
import { useParams } from 'react-router-dom'


const SingleProduct = (product) => {
    const { productID } = useParams()
    const [singleProduct, setSingleProduct] = useState({})

    const getProduct = async (productID) => {
        let url = `http://localhost:5000/products/${productID}`;
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

    // useEffect(()=>{
    //     getProduct()
    // })



    if (product.length == 0) {
        getProduct(productID)
    }

    return (
        <>
            
        </>

    )


}

export default SingleProduct