import React, { useContext } from 'react'
import { ecommerceContext } from './Home'
import { Link } from 'react-router-dom'

import './cart.css';


function Cart() {
    const {cart, setCart}=useContext(ecommerceContext)

    function handleDeleteFromCart(e, itemDelete){
        e.preventDefault()
        setCart(cart.filter(cartItem=>cartItem.id!==itemDelete.id))
    }

    function trimDescription(desc) {
        return (
            desc.length > 80 ? desc.slice(0, 80) + "..." : desc
        )
    }
  return (
    <section className='cart'>
        <h1>Your Cart</h1>
        <div className='cart-list'>
            {
                cart.map((item, index)=>{
                    return (
                        <div key={index} className='cart-item'>
                            <div className='image-div'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className='context-div'>
                                <h3>{item.title}</h3>
                                <p className='description'>{trimDescription(item.description)}</p>
                                <h2>$:{item.price}</h2>
                                <Link onClick={(e)=>handleDeleteFromCart(e, item)}>Delete</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Cart