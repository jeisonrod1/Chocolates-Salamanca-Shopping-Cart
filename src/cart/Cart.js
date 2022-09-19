import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../context/CartContext";


const Cart = () => {
  const { removeItem, clear, isInCart, totalCart, taxes, beforeTaxes, items } =
    useContext(CartContext);

  return (
    <>
      <div className="cart-container">
        <ol>
          {!items.length ? (
            <h3>No items in the shopping cart 💔 </h3>
          ) : (
            items.map((item, index) => (
              <li key={index}>
                <p>Item: {item.name}</p>
                <img className="cart-item-image" src={item.img} />
                <p>Quantity: {item.quantity}</p>
                <p className="cart-item-subtotal"> Subtotal: ${Number(item.quantity* item.price).toFixed(2)} </p>
                <button onClick={() => removeItem(item.id)}>Delete</button>
                <button className="remove-all-cart-items" onClick={() => clear()}>
                  Clear All
                </button>
              </li>
            ))
            )}
            <p> <b>Total amount: </b> ${(totalCart().toFixed(2))}</p>
        </ol>
      </div>
    </>
  );
};

export default Cart;