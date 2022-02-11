import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-trademark'>
        <p>© 2022 Chick&apos;N&apos;Burgers. All rights reserved.</p>
      </div>
      <ul className='footer-links'>
        <li>
          Contact Us
        </li>
        <li>
          <span className='footer-divider'>|</span>
        </li>
        <li>
          Site Map
        </li>
        <li>
          <span className='footer-divider'>|</span>
        </li>
        <li>
          Privacy Policy
        </li>
      </ul>
    </div>
  )
}

export default Footer