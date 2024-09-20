import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import Popup from '../GetApopup/Popup.jsx';
import logo from '../../Assets/Pragatis Interio Logo 1.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 250) { // Adjust this value as per your requirement
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProjectClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  const handleGetAQuoteClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleButtonClick = () => {
    setIsPopupOpen(false); // Close the popup when the button is clicked
  };

  useEffect(() => {
    setIsPopupOpen(true); // Open popup on initial load
  }, []);

  
  return (
    <>
      <header>
        <div className="border-gray-200 px-4 lg:px-6 dark:bg-neutral-100">
          <div className="content container mx-auto flex flex-row justify-between topHeader">
            <div className="flex flex-row justify-between w-100 contact items-center">
              <div className="flex px-2">
                <i className="bi-telephone-fill px-2"></i>
                <p><a href="tel:+917977523087">+91 79775 23087</a></p>
              </div>
              <div className="flex px-2">
                <i className="bi-envelope-fill px-2"></i>
                <p><a href="pragatisinterio@gmail.com" target="_blank">pragatisinterio@gmail.com</a></p>
              </div>
            </div>
            <div className="social-media flex flex-row justify-between">
              <a href="https://www.facebook.com/people/pragatisinterio/100093655032640/?mibextid=ZbWKwL" target="_blank">
                <i className="bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/invites/contact/?igsh=f3579klalwec&utm_content=n52g21f" target="_blank">
                <i className="bi-instagram"></i>
              </a>
              <a href="https://www.google.com/maps/search/PRAGATI'S+INTERIO,+Shop+No.+8,+Laxmi+Narayan+Apt+Opp.+Fish+Market,+Vangaon+Tal-Dahanu,+Mumbai,+Maharashtra+401103/@19.932577,72.6686244,12z/data=!3m1!4b1?entry=ttu" target="_blank">
                <i className="bi-geo-alt"></i>
              </a>
            </div>
          </div>
          <div className="yellowPanel"></div>
        </div>
        <nav className={`border-gray-200 px-4 lg:px-6 py-1 ${isHeaderFixed ? 'fixed' : ''}`}>
          <div className="flex flex-wrap justify-between items-center container mx-auto">
            <img src={logo} alt="" className='logo' />
            <button className="text-gray-700 lg:hidden toggleMenu" onClick={toggleMenu}>
              <i className="bi-list text-2xl"></i>
            </button>
            <ul className="hidden lg:flex lg:flex-row lg:space-x-7">
              <li>
              <a href='/' className="block py-2 pr-4 pl-3 rounded lg:p-0">Home</a>
              </li>
              <li>
              <a onClick={() => handleProjectClick('Services')} className="block py-2 pr-4 pl-3 rounded lg:p-0">Services</a>
              </li>
              <li>
                <a onClick={() => handleProjectClick('Project')} className="block py-2 pr-4 pl-3 rounded lg:p-0">Projects</a>
              </li>
              <li>
                <a onClick={() => handleProjectClick('About')} className="block py-2 pr-4 pl-3 rounded lg:p-0">About Us</a>
              </li>
              <li>
                <a onClick={() => handleProjectClick('Contact')} className="block py-2 pr-4 pl-3 rounded lg:p-0">Contact Us</a>
              </li>
            </ul>
            <NavLink className="navBtn hidden lg:block" onClick={handleGetAQuoteClick}>Get A Free Quote</NavLink>
          </div>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>
            <i className="bi-x-lg text-2xl"></i>
          </button>
          <ul className="flex flex-col mt-4 font-medium">
            <li>
              <NavLink to="/" className="block py-2 pr-4 pl-3 rounded" aria-current="page" onClick={toggleMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Services" className="block py-2 pr-4 pl-3 rounded" onClick={toggleMenu}>Services</NavLink>
            </li>
            <li>
              <a onClick={handleProjectClick} className="block py-2 pr-4 pl-3 rounded">Projects</a>
            </li>
            <li>
              <NavLink to="/About" className="block py-2 pr-4 pl-3 rounded" onClick={toggleMenu}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 pr-4 pl-3 rounded" onClick={toggleMenu}>Contact Us</NavLink>
            </li>
          </ul>
          <NavLink className="navBtn mt-4 w-full text-center" onClick={handleGetAQuoteClick}>Get A Quote</NavLink>
        </div>
      </header>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <button className="close-popup" onClick={closePopup}>
                <i className="bi-x-lg"></i>
              </button>
              <Popup onButtonClick={handleButtonClick} />
            </div>
          </div>
        </div>
      )}
    </>

  );
}
