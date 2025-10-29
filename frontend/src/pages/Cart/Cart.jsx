import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  // ✅ Amount Calculations
  const subtotal = Number(getTotalCartAmount());
  const deliveryFee = subtotal > 0 && subtotal < 150 ? 20 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total </p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={url + "/images/" + item.image} alt="" />
                    <p>{item.name}</p>
                    <p className='price'>₹ {item.price}</p>
                    <p className='qunatity'>{cartItems[item._id]}</p>
                    <p className='total'>₹ {item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'><MdDelete /></p>
                  </div>
                  <hr />
                </div>
              </div>
            )
          }
          return null
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-cart-detail">
              <p>Subtotal</p>
              <p>₹ {subtotal}</p>
            </div>
            <hr />
            <div className="total-cart-detail">
              <p>Delivery Fee</p>
              <p>₹ {deliveryFee}</p>
            </div>
            <hr />
            <div className="total-cart-detail">
              <b>Total</b>
              <b>₹ {grandTotal}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCCES TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
