import React from 'react'
import { Link } from 'react-router-dom'
import SingleProduct from './SingleProduct'


const Product = ({ products, cart, setCart, user }) => {
    // ###Save cart to useState###
    console.log(products) 
    const addCart = (e, productId) => {

        setCart([cart,productId])
        // return {
        //         ...current,
        //         product: {
        //             info: { product },
        //             total: { ...current }
        //         }
        //     }
        // })
        console.log(productId)
        console.log(`cart contents: ${cart}`)
    }

    console.log(product['name'])
    // ###Save cart to Flask db###

    // const addToCart = async () => {
    //     const url = `http://localhost:5000/add_product/${product['id']}`
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             userId: user['id'],
    //             productId: product['id']
    //         })
    //     }


    //     const res = await fetch(url, options);
    //     const data = await res.json()
    //     const newProduct = data.data
    //     if (data.status === 'Ok') {
    //         console.log('succesefully added to cart')
    //         props.setUser(data.data)
    //         return newProduct
    //     }
    // }

    // if (props.user != props.defaultState) {
    //     console.log(props.user)
    //     console.log(props.defaultState)
    //     return (
    //         <h2 className='logged-in'>
    //             You are already logged in!
    //         </h2>
    //     )
    // }
    const singleProductLink = (e, product)  => {
        return (
            <div>
                <link rel="stylesheet" href='products.css' />

                <div className="product-div" key={product.id}>
                    <div className="details-div" >
                        {product['name']} <br />
                        ----------------------------------------------------------
                    </div>
                    <div className="details-div" >
                        <p>{product['price']} </p>
                        ----------------------------------------------------------
                    </div>
                    <div>
                        <a href="" ><img src={product['image']} /></a>
                    </div>
                    <div>
                        <a className="btn btn-primary add" onClick={addCart} >Add To Cart</a>
                    </div>
                    <div>
                        <p > Rating: {product['rating']} </p>
                    </div>

                </div>
                <br />
                <br />
                <br />
            </div>
        )
    }

    

    return (
        <div>
            <link rel="stylesheet" href='products.css' />

            <div className="product-div" key={product.id}>
                <div className="details-div" >
                    {product['name']} <br />
                    ----------------------------------------------------------
                </div>
                <div className="details-div" >
                    <p>{product['price']} </p>
                    ----------------------------------------------------------
                </div>
                <div>
                    <a href="/products/{product['id']" onClick={(e) => singleProductLink(e, product)}><img src={product['image']} /></a>
                    <div>
                        <a className="btn btn-primary add" onClick={(e) => addCart(e, product['id'])}>Add To Cart</a>
                    </div>
                </div>
                <div>
                    <p > Rating: {product['rating']} </p>
                </div>

            </div>
            <br />
            <br />
            <br />
        </div>
    )
}


export default Product
