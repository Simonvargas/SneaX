import React, { useState, useEffect } from 'react';
import { useParams, Link , useHistory} from 'react-router-dom';
import NavBar from '../Navigation/NavBar';
import { allSneax } from '../../store/sneax';
import { getShares } from '../../store/shares';
import { useDispatch, useSelector} from 'react-redux';
// import styles from './sneaxId.module.css'
import  './sneaxDetails.css'
import * as sessionAction from '../../store/session';
import * as shareAction from '../../store/shares';

function SneaxDetails() {
  const [user, setUser] = useState({});
  const [sneaxId, setSneax] = useState([])
  const [share, setShares] = useState([])
  const { userId, id }  = useParams();
  const sneax = useSelector((state) => Object.values(state.sneax))
  const shares = useSelector((state) => Object.values(state.shares))
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const [buy, setBuy] = useState(true)
  const [sell, setSell] = useState(false)
  const current = useSelector((state) => Object.values(state.session))
  const [ totalPosition, setTotalPosition ] = useState('')
  const [ sneakId, setSneakId ] = useState('')
  const [ wallet, setWallet ] = useState('')
  const [ purchaseShares, setPurchaseShares ] = useState(0)

  const history = useHistory()


  const numShares = shares?.map(share => share.user_id === sessionUser.id)

  console.log(numShares)
  useEffect(() => {
    (async function(){
      const res = await fetch(`/api/sneax/${id}`)

      if (res.ok) {
        const Sneax = await res.json()
        setSneax(Sneax)
      }
    })()
  }, [id])
  function showSell() {
    setBuy(false)
    setSell(true)
  }

  function showBuy(){
    setBuy(true)
    setSell(false)
  }

  useEffect(() => {
      dispatch(allSneax())
      dispatch(getShares())
      setWallet(currentwallet)
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

  let currentwallet = 0
  if (current[0]) {
    currentwallet = current[0].wallet
  }
  let posted;
  
  const handleBuy = async (e) => {
    e.preventDefault()

    if (current[0].wallet > totalPosition) {
      if (shares[shares.length -1].includes(sneaxId.id) ) {
        window.alert('Sneax owner, please edit through dashboard')
        window.alert('Purchase canceled')

        // console.log("=========================================",sharePrice)
        // console.log("=========================================",sellQty)
        // console.log("=========================================",purchaseShares)
        // posted = await dispatch(shareAction.updateShare(sharePrice, (Number(sellQty) + Number(purchaseShares)), sneakId))
        // await dispatch(sessionAction.updateUser(wallet -(purchaseShares * sharePrice), current[0].id))
        // window.alert("change complete")
      }
      else {
        posted = await dispatch(shareAction.purchase(sneaxId.market_price, purchaseShares, sneaxId.id))
        await dispatch(sessionAction.updateUser(wallet -(purchaseShares * sneaxId.market_price), current[0].id))
        alert("purchase went through")
        history.go(0)
      }
    } else {
      alert("you too broke")
    }
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
          </div>
          <div className='shares-from'>
            <div>
              <label>Invest in
              <input type='text' value='Sneax' readOnly='readonly' disabled={true}></input>
              </label>
            </div>
            <div>
              <label> Sneax
                <input value={purchaseShares} onChange={((e) => setPurchaseShares(e.target.value))} type='number'></input>
              </label>
            </div>
          <div className='market-price'>
            <p>Market Price </p>
            <p>{sneaxId.market_price}</p>
          </div>

          </div>
          <button onClick={handleBuy}>Purchase</button>
          <div className='buying-power'>
            <p>Buying Power available: {sessionUser.wallet}</p>
          </div>
        </div>
      </div>
      <div>
      
      </div>

    </div>


    </>
  );
}
export default SneaxDetails;
