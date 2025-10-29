import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { IoListSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillHouseAddFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
        <div className="names">
          <BsFillHouseAddFill />
        </div>
        <p>Add Items</p> 
      </NavLink>

      <NavLink to='/list' className="sidebar-option">
       <div className="names">
        <IoListSharp />
       </div>
      
        <p>List Items</p>
      </NavLink>

      <NavLink to='/order' className="sidebar-option">
       <div className="names">
        <TbTruckDelivery />
       </div>
        <p>Orders</p>
      </NavLink>
      </div>
      
    </div>
  )
}

export default sidebar
