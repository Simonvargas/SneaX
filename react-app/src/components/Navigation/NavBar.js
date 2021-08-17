import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
    
    <nav className={styles.navBar2}>
      <div className={styles.navBar2Container}>
      <div className={styles.logo}>
        <img className={styles.photo} src='https://i.imgur.com/mu6iY5g.png'></img>
      </div>
        <div className={styles.dropdown}>
            <i className="icon far fa-user-circle fa-2x"></i>
            <div className={styles.dropdownContent}>
              <p className={styles.links}>Purchasing power: 1000$</p>
              <p className={styles.links}>Settings</p>
              <Link className={styles.links} to='/'><LogoutButton /></Link>
              
              </div>
              
      </div>
      <LogoutButton />
      </div>
    </nav> }
    </div>
  );
}

export default NavBar;
