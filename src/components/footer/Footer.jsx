import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import LOGO from '../../assets/fontpras.png';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        <img src={LOGO} alt="logo" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonias</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/prasetiaadiprakasa" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Prasetiaadi" target="_blank">
          <BsGithub />
        </a>
        <a href="https://instagram.com/prasetiaap" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Prasetia Adiprakasa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
