import React from 'react'


const singleProduct = ({ product }) => {
    console.log(product)
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
                    <div>
                        <a className="btn btn-primary add" href="#">Add To Cart</a>
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

export default singleProduct