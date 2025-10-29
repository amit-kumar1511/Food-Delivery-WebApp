import React from 'react'
import { useContext ,useState,useEffect} from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';
import { SiWhatsapp } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext'
import { useNavigate, useLocation } from 'react-router-dom';



const Footer = () => {
      const {getTotalCartAmount} = useContext(StoreContext);
      const navigate  = useNavigate();
        const [hidden, setHidden] = useState(false);
        const location = useLocation();

         useEffect(() => {
    if (location.pathname !== "/cart" && getTotalCartAmount() > 0) {
     
      setHidden(false);
    }
  }, [location]); useEffect(() => {
    if (location.pathname !== "/cart" && getTotalCartAmount() > 0) {
      // agar cart page से बाहर आए और items मौजूद हों → button फिर से show
      setHidden(false);
    }
  }, [location]);
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem assumenda repellat, quam sequi explicabo quae reprehenderit ab consequuntur dolor repellendus in eos voluptatem illum quisquam numquam doloribus, veniam fugiat.</p>
                <div className="footer-social-icon">
                    <ul className='icon'>
                        <li ><SiWhatsapp /></li>
                        <li ><GrInstagram /></li>
                        <li ><FaFacebook /></li>
                    </ul>
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 80027 86529</li>
                    <li>amitkumar55423@gmail.com</li>
                </ul>



                  <div className={getTotalCartAmount() === 0 ? "" : "fixed-footer-line"}>
      {!hidden && (
        <div className='vtn'
          onClick={() => {
            setHidden(true);         // button ko hide kar dega
            navigate("/cart");       // cart page par le jayega
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
              });
            }, 0);
          }}
        >
          Order Now
        </div>
      )}
    </div>





            </div>
            
        </div>

        <hr />
        <p className="footer-copyright">
            copyright 2025  @ Tomato.com - Created By - Amit Sharma
        </p>

       
                  
    </div>
  )
}

export default Footer;
