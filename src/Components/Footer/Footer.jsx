import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container mx-auto">
          <div className="flex boxs">
            <div className="w-2/6">
              <h6>Logo</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis reprehenderit magnam provident porro?</p>
              <div className="socialMedia">
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
            <div className="w-4/6">
              <div className="flex boxs lastBox">
                <div className="w-1/4 px-2">
                  <h6>Company</h6>
                  <ul>
                    <li>Services</li>
                    <li>Project</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="w-1/4 px-2">
                  <h6>Contact</h6>
                  <ul>
                    <li>+91 7977523087</li>
                    <li>pragatisinterio@gmail.com</li>
                  </ul>
                </div>
                <div className="w-2/4 px-8">
                  <h6>Get the letest information</h6>
                  <form action="" className='flex'>
                    <input type="email" placeholder='Email address' />
                    <i className="bi-arrow-right-square-fill"></i>
                  </form>
                  <ul className='mt-3'>
                    <li>Shop No. 8, Laxmi Narayan Apt Opp. Fish Market, Vangaon Tal-Dahanu, Mumbai, Maharashtra 401103</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex downFooter">
            <h2>Copyright 2024 All Rights Reserved.</h2>
            <h2>User Terms & Condition | Privacy Policy</h2>
          </div>
        </div>
      </footer>
    </>
  )
}
