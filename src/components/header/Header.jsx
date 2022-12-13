import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/peep-76.svg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className='header'>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Prasetia Adiprakasa</h1>
        <h2 className="text-light">Front-end Developer & Project Management</h2>

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
