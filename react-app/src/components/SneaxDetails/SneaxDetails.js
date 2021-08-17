import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './sneaxId.module.css'
import NavBar from '../Navigation/NavBar';
import { allSneax } from '../../store/sneax';
import { getShares } from '../../store/shares';
import { useDispatch, useSelector } from 'react-redux';

function SneaxDetails() {
  const [user, setUser] = useState({});
  const [sneaxId, setSneax] = useState([])
  const [share, setShares] = useState([])
  const { userId, id }  = useParams();
  const sneax = useSelector((state) => Object.values(state.sneax))
  const shares = useSelector((state) => Object.values(state.shares))
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    (async function(){
      const res = await fetch(`/api/sneax/${id}`)

      if (res.ok) {
        const Sneax = await res.json()
        setSneax(Sneax)
      }
    })()
  }, [id])





  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);

    })();
  }, [userId]);

  if (!user) {
    return null;
  }


  return (
  <>
  <NavBar />
  <img src={`${sneaxId.image}`}></img>
  <p>{`${sneaxId.name} ${sneaxId.brand_name} ${sneaxId.market_price} ${sneaxId.details}`}</p>
  <div className={styles.inputBox}>
    <h3>Buy</h3>
    <label>Invest in
      <input
      type='text'
      value='Sneax'
      >
      </input>
    </label>
    <label> Sneax
      <input type='number'></input>
    </label>
    <p>Market Price: {sneaxId.market_price}</p>
    <button>Purchase</button>
    <p>Buying Power available: {sessionUser.wallet}</p>
  </div>
  </>
  );
}
export default SneaxDetails;