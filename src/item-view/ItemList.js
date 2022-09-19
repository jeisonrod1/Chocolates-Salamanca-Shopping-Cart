import React from "react";
import Item from "./Item";
import './Item.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
