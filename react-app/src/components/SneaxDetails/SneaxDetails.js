import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Navigation/NavBar';
import { allSneax } from '../../store/sneax';
import { getShares } from '../../store/shares';
import { useDispatch, useSelector } from 'react-redux';
// import styles from './sneaxId.module.css'
import  './sneaxDetails.css'


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
    <div></div>
    <div className="sneax-detail-container">
      <div clasName='sneax-info-container'>
        <div className='sneax-info-box'>
          <div className='sneax-name-brand-box'>
            <div className='name'><h1 className="sneax-name">{sneaxId.name} </h1></div>
            {/* <div className='brand'> */}
            <h2 className='sneax-brand'>Brand: {sneaxId.brand_name}</h2>
            <h1 className='sneax-price'>${sneaxId.market_price}</h1>
          </div>
          <div className='sneax-image'>
            <img src={sneaxId.image}></img>
          </div>
          <div className='sneax-about-container'>
            <h1>About</h1>
          </div>
          <div className='sneax-details'>
            <p className='detail'>{sneaxId.details}</p>
          </div>
          <div className='random-words'>
            <p>All investments involve risks, including the loss of principal. Securities trading offered through Robinhoot Financial LLC, a registered broker-dealer and Member SIPC. Full Disclosure</p>
          </div>
        </div>
      </div>
      <div className="shares-container">
        <div className='shares-form-container'>
          <div className='shares-buy-sell'>
            <h2>Buy</h2>
            <h2>Sell</h2>
          </div>
          <div className='shares-from'>
            <div>
              <label>Invest in
              <input type='text' value='Sneax' readOnly='readonly' disabled={true}></input>
              </label>
            </div>
            <div>
              <label> Sneax
                <input type='number'></input>
              </label>
            </div>
          <div className='market-price'>
            <p>Market Price </p>
            <p>{sneaxId.market_price}</p>
          </div>

          </div>
          <button>Purchase</button>
          <div className='buying-power'>
            <p>Buying Power available: {sessionUser.wallet}</p>
          </div>
        </div>


      </div>
    </div>
    </>
  );
}
export default SneaxDetails;
