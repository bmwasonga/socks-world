import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <p className="text-center">
        Photo credits from{' '}
        <a
          href="https://www.instagram.com/thesocks_basket/"
          target="_blank"
          rel="noreferrer"
          className="text-primary"
        >
          {' '}
          the_socks_basket
          <FaInstagram />
        </a>
      </p>
    </div>
  );
}

export default Footer;
