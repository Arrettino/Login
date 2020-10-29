import React from 'react';
import { Link } from 'react-router-dom';
import react from '../assets/static/react.png';

const Home = () => (
  <div>
    <header>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign Up </Link></li>
      </ul>
    </header>
    <img src={react} alt='react' />
  </div>
);

export default Home;
