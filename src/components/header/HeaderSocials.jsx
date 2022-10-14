import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
