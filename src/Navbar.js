import React from 'react'
import {FaLocationDot,FaSquareFacebook,FaInstagram,FaSquareXTwitter} from 'react-icons/fa6'
import './Navbar.css';
import {Link} from 'react-scroll';
import logo from './channels4_profile-removebg-preview.png';

const Navbar = () => {
  return (
    <div className='navigation'>
        <div className='navbar-contacts'>
           <div className="contact">
            <p>+91 78745 78745</p>
            <p><i className='me-2'><FaLocationDot/></i>Salem</p>
           </div>
            <div className="social-links">
              <p><FaSquareFacebook/></p>
              <p><FaInstagram/></p>
              <p><FaSquareXTwitter/></p>
            </div>
        </div>
        <div className="nav-menus">
            <div className="nav-brand">
                <div className="logo">
                    <img src={logo} height={50} width={50} alt="" />
                </div>
                <p className='logo-name'>TECH CHAMP</p>
            </div>
            <ul className="nav-menus-menu list-unstyled">
                 <li><Link activeClass='active' className='links'  to="navigation" spy={true} smooth={true}  offset={-95} duration={100} >Home</Link></li>
                 <li><Link  activeClass='active' className='links'  to="about" spy={true} smooth={true}  offset={-60} duration={100} >About</Link></li>
                 <li><Link  activeClass='active' className='links' to="service" spy={true} smooth={true}  offset={-60} duration={100} >Service</Link></li>
                 <li><Link  activeClass='active' className='links' to="contactus" spy={true} smooth={true}  offset={-50} duration={100} >Contactus</Link></li>
                 <li><Link activeClass='active' className='links'  to="" spy={true} smooth={true}  offset={-50} duration={100} >Login</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar