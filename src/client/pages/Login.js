import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignUp from '../components/GoogleSignUp';
import GithubSignUp from '../components/GithubSignUp';
import FormLogin from '../components/FormLogin';
import logoPortfolio from '../assets/static/portfolio.svg';
import '../assets/style/Login.css';

function Login() {

  return (
    <div className='login_container'>
      <div className='login_card'>
        <div className='login_form_container'>
          <div className='login_icon_container'>
            <Link to='/'>
              <img
                src={logoPortfolio}
                alt='Portfolio Logo'
                className='login_icon'
              />
            </Link>
          </div>
          <FormLogin />
        </div>
        <div className='login_social_buttoms'>
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
