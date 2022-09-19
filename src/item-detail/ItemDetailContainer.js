import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

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

    const selectedChocolate = products.find((el) => el.id == id);
    setItem(selectedChocolate);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(selectedChocolate);
      }, 2000);
    })
      .then((data) => {
        setItem(data);
      }).catch()
  }, [id]);
  return (
    <>
      <div>
        <ItemDetail item={item} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
