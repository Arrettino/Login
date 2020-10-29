import React from 'react';
import { Link } from 'react-router-dom';
import logoPortfolio from '../assets/static/portfolio.svg';
import '../assets/style/ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className='forgot_password_container'>
      <div className='forgot_password_card'>
        <div className='forgot_password_card_content'>
          <Link to='/'>
            <img
              src={logoPortfolio}
              alt='Portfolio Logo'
              className='forgot_password_icon'
            />
          </Link>
          <h4 className='forgot_password_title'>Forgot your password?</h4>
          <p>Please fill in the email that you used to register. You will be sent an email with instructions on how to reset your password.</p>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            className='forgot_password_email'
          />
          <input type='submit' className='forgot_password_buttom' value='Send Email' />
          <div className='forgot_password_signin'>
            <p>Remember your password?</p>
            <Link to='/login' className='forgot_password_link'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
