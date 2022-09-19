import React from 'react'
import {Link} from "react-router-dom"
import './Item.css'

const Item = ({id, img, name, price}) => {

    

return (
    <>
      <div className="card-item-container">
        <div className="card-img-container">
          <img className="card-item-img" src={img} alt="" />
        </div>
        <div className="card-flag-container">
          <div className="card-name-container">
            <p className="card-item name">{name}</p>
          </div>
        </div>
        <div className="card-info-container">
          <p className="card-item price">Starts at ${price}</p>
          <p className="card-item text">24/7 for you</p>
          <Link to={`/chocolate/${id}`} className="more-info-btn"><span className="find-out-more-span">Find out more</span></Link>
        </div>
      </div>
    </>
  )
}

export default Item