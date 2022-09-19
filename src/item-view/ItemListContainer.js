import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let products = [
      {
        id: 1,
        name: "Dark Chocolate 70% with Cashew",
        img: require("../assets/merey2.png"),
        price: 7.99,
        stock: 19,
        
      },
      {
        id: 2,
        name: "Dark Chocolate 70% with almond and orange",
         img: require("../assets/naranja1.png"),
        price: 7.99,
        stock: 10,
        
      },
      {
        id: 3,
        name: "Dark Chocolate 70% with chilli",
         img: require("../assets/picante.png"),
        price: 6.99,
        stock: 10,
        
      },
    ];
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    })
      .then((data) => {
        setItems(data);
      })
      .catch();
  }, []);

  return <div>{items.length ? <ItemList items={items} />: <h2>loading</h2> }</div>;
};

export default ItemListContainer;
