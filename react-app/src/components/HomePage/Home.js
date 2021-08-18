import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionAction from '../../store/session';
import * as shareAction from '../../store/shares';
import { allSneax } from '../../store/sneax';
import { getList } from '../../store/watchlist'
import TestingWatch from './TestingWatch';
import SplashPage from './SplashPage'
import NavBar from '../Navigation/NavBar';

import './Dashboard.css'


function Home() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
  const history = useHistory()

  const sneaxs = useSelector((state) => Object.values(state.sneax))
  const sessionUser = useSelector(state => state.session.user)
  const shares = useSelector((state) => Object.values(state.shares))
  const current = useSelector((state) => Object.values(state.session))

  const [user, setUser] = useState({})
  const [ showEdit, setShowEdit ] = useState(false)
  const [ showTrade, setShowTrade ] = useState(false)
  const [ sellId, setSellId ] = useState('')
  const [ sellQty, setSellQty ] = useState('')
  const [ totalPosition, setTotalPosition ] = useState('')
  const [ shareQty, setShareQty ] = useState('')
  const [ purchaseShares, setPurchaseShares ] = useState('')
  const [ sharePrice, setSharePrice ] = useState('')
  const [ shareId, setShareId ] = useState('')
  const [ marketPrice, setMarketPrice ] = useState('')
  const [ sneakId, setSneakId ] = useState('')
  let [ totalAccount, setTotalAccount ] = useState(0)
  const [ wallet, setWallet ] = useState('')
  const [ openBuy, setOpenBuy ] = useState(false)
  const [ openSell, setOpenSell ] = useState(false)


  useEffect(() => {
    dispatch(allSneax())
    dispatch(shareAction.getShares())
    dispatch(sessionAction.loadCurrent(userId))
    dispatch(getList())
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

  let currentwallet = 0
  if (current[0]) {
    currentwallet = current[0].wallet
  }

  let content = null
  let shareContent = null
  let main = null
  let posted;



  if (!user) {
    return null;
  }


  const reset = () => {
    setPurchaseShares('')
  }


  const tradeSubmit = async (e) => {
    e.preventDefault();
    let answer = window.confirm("Are you sure you want to make this change?")
    if (answer) {
      if (current[0].wallet > (purchaseShares * sharePrice)) {
        posted = await dispatch(shareAction.updateShare(sharePrice, (Number(sellQty) + Number(purchaseShares)), shareId))
        await dispatch(sessionAction.updateUser(wallet -(purchaseShares * sharePrice), current[0].id))
        window.alert("change complete")
        history.push('/')
        history.go(0)
      } else {
        window.alert('change canceled')
      }
    }
  }


  const handleSell = async () => {
    posted = await dispatch(shareAction.deleteShare(shareId))
    await dispatch(sessionAction.updateUser((totalPosition + wallet), current[0].id))
    alert("remove went through")
    history.go(0)
  }

    const tradeSell = async (e) => {
      e.preventDefault();
      let answer = window.confirm("Are you sure you want to make this sell?")
      if (answer) {
        if (sellQty >= purchaseShares) {
          if ((Number(sellQty) - Number(purchaseShares) === 0)) {
            handleSell()
          } else {
            posted = await dispatch(shareAction.updateShare(sharePrice, (Number(sellQty) - Number(purchaseShares)), shareId))
            await dispatch(sessionAction.updateUser(wallet + (purchaseShares * sharePrice), current[0].id))
            window.alert("change complete")
            history.push('/')
            history.go(0)
          }
        } else {
          window.alert("You do not hold enough shares")
        }
      }
    }

  const handleBuy = async (e) => {
    e.preventDefault()

    if (current[0].wallet > totalPosition) {
      if (shares[shares.length -1].includes(sneakId) ) {
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
        posted = await dispatch(shareAction.purchase(marketPrice, purchaseShares, sneakId))
        await dispatch(sessionAction.updateUser(wallet -(purchaseShares * marketPrice), current[0].id))
        alert("purchase went through")
        history.go(0)
      }
    } else {
      alert("you too broke")
    }
  }

  if (showEdit) {
    content = (
        <>
          <form
          className='sell_form_container'>
            <label> number of sharessss
              <input
                type='number'
                value={purchaseShares}
                onChange={(e) => (setPurchaseShares(e.target.value), setTotalPosition(e.target.value * marketPrice))}
              />
            </label>
            <button onClick={(e) => handleBuy(e)} type='button'>Purchase</button>
          </form>
        </>
    )
  }


  if (openBuy) {
    shareContent = (
      <>
            <form
              onSubmit={(e) => tradeSubmit(e)}
              className='sell_form_mod'>
              <label> number of shares
                <input
                  type='number'
                  value={sellQty}
                  onChange={null}
                />
              </label>
              <label> Sneax Id
                <input
                  type='number'
                  value={sellId}
                  onChange={null}
                />
              </label>
              <label> total position
                <input
                  type='number'
                  value={totalPosition}
                  onChange={null}
                />
              </label>
              <label> number of shares
                <input
                  type='number'
                  value={shareQty}
                  onChange={null}
                />
              </label>
              <label> number
                <input
                  type='number'
                  value={purchaseShares}
                  min='0'
                  onChange={(e) => setPurchaseShares(e.target.value)}
                />
              </label>
              <button type='submit'>Purchase</button>
            </form>
    </>
    )
  } else if (openSell) {
    shareContent = (
          <>
      <form onSubmit={(e) => tradeSell(e)}>
        <label> number
          <input
            type='number'
            value={purchaseShares}
            min='0'
            onChange={(e) => setPurchaseShares(e.target.value)}
          />
        </label>
        <button type='submit'>Sell</button>
      </form>
      {/* <button onClick={(e) => handleSell(e)}>Sell</button> */} {/* this deletes */}
    </>
    )
  }

  function handleCancel() {
    if (openBuy || openSell) {
      setOpenBuy(false)
      setOpenSell(false)
    } else {
      reset()
      setShowTrade(false)
    }
  }

  if (showTrade) {
    content = (
        <div className='sell_form_container'>

              {/* <button onClick={() => (reset(), setOpenBuy(!openBuy), setOpenSell(false))}>Buy</button> toggle button fuction as according to available position */}
              <button onClick={() => (reset(), setOpenSell(!openSell), setOpenBuy(false))}>Sell</button>
              <button onClick={() => handleCancel()}>Cancel</button>
              {shareContent}
        </div>
    )
  }

  if (sessionUser) {
    main = (
      <>
      <NavBar/>
      <div>
      <h2>Shares</h2>
        {shares?.map(share => {
                if (Number(share.sneax_id)) {
                  return (
                  <ul>
                    <li>
                      <strong>Sneax name: {share.sneax.name}</strong>
                    </li>
                    <li>
                      <strong>Price: $ {share.price_per_share}</strong>
                    </li>
                    <li>
                      <strong>quantity of shares: {share.number_of_shares}</strong>
                    </li>
                    <li>
                      <strong>total position: ${share.number_of_shares * share.price_per_share}</strong>
                    </li>
                    <button
                      onClick={() => (reset(), setShowEdit(false), setShowTrade(!showTrade), setSellId(share.sneax_id), setSellQty(share.number_of_shares), setTotalPosition(share.number_of_shares * share.price_per_share), setShareQty(share.number_of_shares), setSharePrice(share.price_per_share), setShareId(share.id))}
                    >trade</button>
                    <div hidden="true">
                      {totalAccount += (share.number_of_shares * share.price_per_share)}.
                    </div>
                  </ul>
        )}})}
        <TestingWatch />
      </div>

      {
        wallet ? [<h2>Total buying power: {wallet}</h2>, <h2>Total investing: {totalAccount} </h2> ]: null
          //   <h2>total account value: </h2>
      }
      {content}
    </>
    )
  } else {
    main = (
      <>
        <SplashPage />
      </>
    )
  }

  return (
    <>
    {main}
    </>
  );
}
export default Home;
