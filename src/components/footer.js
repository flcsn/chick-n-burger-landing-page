import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-trademark'>
        <p>© 2022 Chick&apos;N&apos;Burgers. All rights reserved.</p>
      </div>
      <ul className='footer-links'>
        <li>
          <a href='#'>Contact Us</a>
        </li>
        <li>
          <span className='footer-divider'>|</span>
        </li>
        <li>
          <a href='#'>Site Map</a>
        </li>
        <li>
          <span className='footer-divider'>|</span>
        </li>
        <li>
          <a href='#'>Privacy Policy</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer