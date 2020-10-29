import React from 'react';
import '../assets/style/Components/githubSignin.css';

function GithubSignUp() {
  const clientId = process.env.CLIENT_ID_GITHUB;
  const redirectUri = 'http://localhost:3002/server/login/github';
  const scope = 'user:email';
  const url = `https://github.com/login/oauth/authorize?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}`;
  return (
    <div className='github_signup_container'>
      <a href={url} className='github_signup_link'>
        <div className='github_signup_icon_container'>
          <img
            src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg'
            alt='GitHub Icon'
            className='github_signup_icon'
          />
        </div>
        <p className='github_signin_p'>Sign in with Google</p>
      </a>
    </div>
  );
}

export default GithubSignUp;
