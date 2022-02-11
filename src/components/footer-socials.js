import React from 'react'
import FacebookLogo from '../assets/socials/facebook.svg'
import TwitterLogo from '../assets/socials/twitter.svg'
import InstagramLogo from '../assets/socials/instagram.svg'

const FooterSocials = () => {
  return (
    <ul className='footer-socials'>
      <li>
        <img src={FacebookLogo} alt='Facebook logo'></img>
      </li>
      <li>
        <img src={TwitterLogo} alt='Twitter logo'></img>
      </li>
      <li>
        <img src={InstagramLogo} alt='Instagram logo'></img>
      </li>
    </ul>
  )
}

export default FooterSocials