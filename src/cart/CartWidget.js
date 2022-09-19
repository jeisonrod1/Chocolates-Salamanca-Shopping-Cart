import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import carticon from '../assets/carticon.png'
import { CartContext } from '../context/CartContext'
import Cart from './Cart'
import './Cart.css' 

const CartWidget = () => {

  const {items} = useContext(CartContext);
  
  return (
    <div>
        <Link className='cart-icon-container' to='/cart' element={<Cart/>} >
            <img className='cart-icon' alt='cart-icon' src={carticon} />
            <span className='item-counter'>{(items.reduce((acc, el) => acc + el.quantity, 0))}</span>
        </Link>
    </div>
  )
}

export default CartWidget