
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <div>
    {!sessionUser ?
    <nav className={styles.navBar}>
      <div>hello</div>
    </nav> :
    <nav>
       <li>
          <NavLink to='/' exact={true}>
          <LogoutButton />
          </NavLink>
        </li>
      <div>hello</div>
    </nav> }
    </div>
  );
}

export default NavBar;


{/* <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
      </ul> */}