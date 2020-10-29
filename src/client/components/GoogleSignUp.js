import React from 'react';
import '../assets/style/Components/googleSignIn.css';

function GoogleSignUp() {
  const clientId = process.env.CLIENT_ID_GOOGLE;
  const redirectUri = 'http://localhost:3002/server/login/google';
  const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  return (
    <div className='google_signup_container'>
      <a href={url} className='google_signup_link'>
        <div className='google_signup_icon_container'>
          <img
            src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
            alt='Google Icon'
            className='google_signup_icon'
          />
        </div>
        <p className='google_signin_p'>Sign in with Google</p>
      </a>
    </div>
  );
}

export default GoogleSignUp;
