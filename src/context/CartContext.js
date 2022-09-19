import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  function addItem(item, quantity) {
    if (isInCart(item.id)) {
      let aux = items;
      let itemIndex = aux.findIndex((e) => e.id === item.id);
      aux[itemIndex].quantity += quantity;
      setItems([...aux]);
    } else {
      setItems([...items, { ...item, quantity }]);
    }
  }

  function removeItem(itemId) {
    setTimeout(() => {
      setItems(items.filter((e) => e.id != itemId));
    }, 200);
  }
  function clear() {
    setItems([]);
  }
  const isInCart = (itemId) => {
    return items.find((e) => e.id == itemId);
  };

  const totalCart = () => {
    const total = items.reduce(
      (acc, item) => (acc += item.quantity * item.price.toFixed(2)),
      0
    );
    console.log(total);
    return total;
  };
  const taxes = () => {
    const total = items.reduce(
      (acc, item) => (acc += item.quantity * item.price.toFixed(2)),
      0
    );
    const tax = total - total / 1.19;
    return tax;
  };

  const beforeTaxes = () => {
    const total = items.reduce(
      (acc, item) => (acc += item.quantity * item.price.toFixed(2)),
      0
    );
    const beforeTax = total / 1.19;
    return beforeTax;
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        totalCart,
        taxes,
        beforeTaxes,
        items,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
