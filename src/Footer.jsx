import React from 'react'
import './Footer.css'
import { 
  faLinkedin, 
  faInstagram, 
  faFacebook, 
  faTwitter,
} 
from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
  return (
    <footer className='Footer'>
        <div className='icons'>
            <a href="">
            <FontAwesomeIcon icon={faGithub} size="2x"  /></a>
            <a href="">
            <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="">
            <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="">
            <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="">
            <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="">
            <FontAwesomeIcon icon={faCodeBranch} size="2x" /></a>
        </div>
        <h3>Designed & Built by <span>Suleyman Dadashov</span></h3>
        </footer>
  )
}
