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
      <div className={styles.logo}>
        <img className={styles.photo} src='https://i.imgur.com/mu6iY5g.png'></img>
      </div>
      <div className={styles.btnContainer}>
      <NavLink to='/login'>
      <button className={`${styles.btn} ${styles.btn1}`}>Log in</button>
      </NavLink>
      <NavLink to='/signup'>
      <button className={`${styles.btn} ${styles.btn2}`}>Sign up</button>
      </NavLink>
      </div>
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
