import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router';
import styles from '../Navigation/NavBar.module.css'

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button className={`${styles.btn} ${styles.btn1}`} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
