import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { ecommerceContext } from './Home';


function Header() {
  const { cart } = useContext(ecommerceContext)
  return (
    <header className="header">
      <h1>Ecommerce</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/cart'>
            Add To Cart<span className='count'>{cart.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header