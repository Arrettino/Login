import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../assets/style/Components/FormSignup.css';

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form_signup'>

      <div className='form_signup_container_name'>
        <input
          name='firstName'
          placeholder='First Name'
          className='form_signup_name'
          ref={register}
        />
        <input
          name='lastName'
          placeholder='Last Name'
          className='form_signup_name'
          ref={register}
        />
      </div>

      <input
        name='email'
        placeholder='Email Address'
        className='form_signup_email'
        ref={register}
      />

      <input
        type='password'
        name='password'
        placeholder='Password'
        className='form_signup_password'
        ref={register({ required: true })}
      />

      <input
        type='password'
        name='repeatPassword'
        placeholder='Repeat Password'
        className='form_signup_password'
        ref={register({ required: true })}
      />

      <div className='form_signup_options'>
        <label htmlFor='checkbox' className='form_signup_checkbox'>
          <input type='checkbox' id='checkbox' name='checkbox' ref={register} />
          <p>I have read and agree to the</p>
          <Link to='.' className='form_signup_terms'>
            <p>terms of service</p>
          </Link>
        </label>
      </div>

      <input type='submit' className='form_signup_buttom' />

      <div className='form_signup_login_container'>
        <p>Have an Portfolio account?</p>
        <Link to='/login' className='form_signup_login'>Login</Link>
      </div>
    </form>
  );
}

export default App;
