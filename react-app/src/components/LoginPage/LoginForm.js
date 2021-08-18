import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory  } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginPage.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginDemoUser = async(e) =>  {
    // const demoUser = {
    //   email: "demo@aa.io",
    //   password: "password"
    // }
    const email = "demo@aa.io"
    const password = "password"

    await dispatch(login(email, password))
    // history.push('/')
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-page-container'>
      <div className='login-pic-container'></div>
      <div className='login-form-page'>
        <div className='login-form'>
          <h2>Welcome to SneaX</h2>
          <form className='user-login-info' onSubmit={onLogin}>
            <div className="login-validations-container">
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='login-info-inputs'>
              <label htmlFor='email'>Email</label>
              <input name='email' type='text' placeholder='Email' value={email} onChange={updateEmail}/>
            </div>
            <div className='login-info-inputs'>
              <label htmlFor='password'>Password</label>
              <input name='password' type='password' placeholder='Password' value={password} onChange={updatePassword}/>
            </div>
            <div className='signup-redirect'>
                <p>Don't have an account? <a href='/signup'>Sign up here</a></p>
            </div>
                <button id='login-bttn' type='submit'>Sign In</button>

          </form>
              <div className='login-buttons'>
                <button onClick={loginDemoUser} id='demo-bttn' type='submit'>Demo User</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
