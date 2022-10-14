import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Prasetia</h1>
        <h3 className="text-light">Frontend Developer <br/> & <br/> Project Management</h3>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me.img" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
