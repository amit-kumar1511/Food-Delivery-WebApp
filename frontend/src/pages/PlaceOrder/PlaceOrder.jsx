import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    street: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prev => ({ ...prev, [name]: value }))
  }

  // ✅ Amount Calculations (ek hi jagah rakha)
  const subtotal = Number(getTotalCartAmount());
  const deliveryFee = subtotal > 0 && subtotal < 150 ? 20 : 0;
  const grandTotal = subtotal + deliveryFee;

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: grandTotal,
    }

    try {
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error")
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    } else if (subtotal === 0) {
      navigate('/cart')
    }
  }, [token, subtotal, navigate])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>DELIVERY INFORMATION</p>
        <div className="multi-fields">
          <input required name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='name' />
        </div>
        <input required name='address' onChange={onChangeHandler} value={data.address} type="address" placeholder='Address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='street' />
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <p className='pr'>CART  - TOTALS</p>
          <div className='total-carts'>
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
          {/* <button type='submit'>PROCCES TO PAYMENT</button> */}
          <button onClick={() => {
    // ⚡ Yahan tum payment API call ya cash-on-delivery confirm karoge
    // Agar success
    clearCart();    // ✅ cart empty
    navigate('/order'); // redirect
}}>
  PROCEED PAYMENT
</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
