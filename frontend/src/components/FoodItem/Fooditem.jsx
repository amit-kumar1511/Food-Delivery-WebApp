import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({id,name,price,description,image}) => {


const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='food-item'>

        <div className="food-item-img-container">
            <img className='food-item-img' src={url+"/images/"+image} alt="" />
        </div>

        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <div className="price-button">

            <p className="food-item-price">₹ {price}</p>
            {/* <button>Add To Cart</button> */}

            {
              !cartItems[id]
              ?<button className='add' onClick={()=>addToCart(id)}>Add To Cart</button>
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }




            </div>
        </div>

      
    </div>
  )
}

export default Fooditem
