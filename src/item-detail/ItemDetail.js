
import React, { useContext, useState } from 'react'
import Count from './Count'
import {CartContext} from '../context/CartContext'




const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);
  const [counter, setCounter] = useState(0);  

    const onAdd = (count) =>{
      setCounter(count)
      addItem(item, count);
    }
    

  return (

    <div>
        <div className="right-top-detail-container">
                  <h3 className="item-detail-name">{item.name} </h3>
                <div className="item-detail-description-container">
                  <p className="item-detail-description">{item.description}</p>
                  <p className="item-detail-price">For only: ${item.price}</p>
                </div>
              </div>
              <div className="right-bottom-detail-container">
                <Count stock={item.stock} initial={1} onAdd={onAdd}/>
              </div>
    </div>
  )
}

export default ItemDetail