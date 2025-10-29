import React from 'react'
import './Navbar.css'
import image from '../../assets/image.png'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <img className='logo' src={image} alt="" />
    </div>
    </>
  )
}

export default Navbar
