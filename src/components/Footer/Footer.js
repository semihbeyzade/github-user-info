import React from 'react';
import { FaGithub } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-line'></div>
      <FaGithub className='footer-github-logo' />
    </div>
  );
}

export default Footer;