import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "./product.css";
import { ecommerceContext } from './Home';

function Product() {
    const [product, setProduct] = useState([])
    const { cart, setCart } = useContext(ecommerceContext)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((result) => {
                // console.log(result.data)
                setProduct(result.data)
            })
    }, [])

    function trimDescription(desc) {
        return (
            desc.length > 80 ? desc.slice(0, 80) + "..." : desc
        )
    }
    function handleaddTocart(e, id) {
        e.preventDefault()
        setCart([...cart, product[id]])
    }


    function existsIncart(productid) {
        return cart.some(items => items.id === productid)
    }
    console.log(cart)
    return (
        <>
            <div className='headdiv'>
                <h1>Products</h1>
                <div className='products'>
                    {
                        product.map((items, index) => {
                            return (
                                <div className='product' key={index}>
                                        <img src={items.image}></img>
                                        <h3>{items.title}</h3>
                                        <p className='description'>{trimDescription(items.description)}</p>
                                        <h2>$:{items.price}</h2>
                                    {
                                            (existsIncart(items.id))
                                            ? <a href='' className='addedTocart'>Added To Cart</a>
                                            : <a href='' className='addTocart' onClick={(e) => handleaddTocart(e, index)}>Add To Cart</a>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product