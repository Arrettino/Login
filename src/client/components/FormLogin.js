import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../assets/style/Components/FormLogin.css';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form_login'>
      <input
        name='email'
        placeholder='Email Address'
        className='form_login_email'
        ref={register}
      />

      <input
        name='password'
        placeholder='Password'
        className='form_login_password'
        ref={register({ required: true })}
      />

      <div className='form_login_options'>
        <label htmlFor='checkbox' className='form_login_checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            name='checkbox'
            ref={register}
          />
          <p>Remember me</p>
        </label>
        <Link to='/login/forgot-password' className='form_login_forgot_password'>
          <p>Forgot your Password</p>
        </Link>
      </div>

      <input type='submit' className='form_login_buttom' />

      <div className='form_login_signup_container'>
        <p>Don’t have an Portfolio account?</p>
        <Link to='/signup' className='form_login_signup'>Sign Up</Link>
      </div>
    </form>
  );
}

export default App;
