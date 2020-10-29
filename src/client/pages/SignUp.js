import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignUp from '../components/GoogleSignUp';
import GithubSignUp from '../components/GithubSignUp';
import FormSignUp from '../components/FormSignUp';
import logoPortfolio from '../assets/static/portfolio.svg';
import '../assets/style/Signup.css';

function Login() {

  return (
    <div className='singup_container'>
      <div className='singup_card'>
        <div className='singup_form_container'>
          <div className='singup_icon_container'>
            <Link to='/'>
              <img
                src={logoPortfolio}
                alt='Portfolio Logo'
                className='login_icon'
              />
            </Link>
          </div>
          <FormSignUp />
        </div>
        <div className='singup_social_buttoms'>
          <div>
            <GithubSignUp />
          </div>
          <div>
            <GoogleSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
