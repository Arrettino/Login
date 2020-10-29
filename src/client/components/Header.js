import React from 'react';
import { Link } from 'react-router-dom';
import logoPortfolio from '../assets/static/portfolio.svg';
import '../assets/style/Components/header.css';

function Header() {
  return (
    <header>
      <div className='header_logo_portfolio_container'>
        <Link to='/'>
          <img
            src={logoPortfolio}
            alt='Logo Portfolio'
            className='header_logo_portfolio'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
