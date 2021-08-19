
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { allSneax } from '../../store/sneax';
import * as sessionAction from '../../store/session';
import * as shareAction from '../../store/shares';
import SplashPage from './SplashPage'
import Dashboard from './Dashboard';
import { getList, createList, removeList, editList  } from '../../store/watchlist'
import TestingWatch from './TestingWatch';
import { getWatchs, addOneWatch, removeOneWatch } from '../../store/watch';

import './Dashboard.css'
import NavBar from '../Navigation/NavBar';

function CrudTesting() {
  const dispatch = useDispatch()

  const allWatchs = Object.values(useSelector(state => state.watch))
  const sneaxs = useSelector((state) => Object.values(state.sneax))
  const sneax = useSelector((state) => Object.values(state.sneax))
  const shares = useSelector((state) => Object.values(state.shares))
  const current = useSelector((state) => Object.values(state.session))
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const [ showEdit, setShowEdit ] = useState(false)
  const [ showTrade, setShowTrade ] = useState(false)
  const [ sellId, setSellId ] = useState('')
  const [ sellQty, setSellQty ] = useState('')

  const sessionUser = useSelector(state => state.session.user)

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

  const watchlists = Object.values(useSelector(state => state.watchlist))

  const [watchState, setWatchstate] = useState(false)
  const [watchNumber, setWatchNumber] = useState(0)

  const history = useHistory()

  let currentwallet = 0
  if (current[0]) {
    currentwallet = current[0].wallet
  }
  function userWatchList(e) {
    setWatchNumber(e.target.id)
    setWatchstate(true)
  }

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

  if (!user) {
    return null;
  }

  let content = null
  let shareContent = null
  let main = null
  let posted;

  const reset = () => {
    // setTotalPosition()
    // setShareQty('')
    setPurchaseShares('')
    // setSharePrice('')
    // // setShareId('')
    // setMarketPrice('')
    // setSneakId('')
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
    await dispatch(editList("Watchlist TEST", 1, 1))
    alert("remove went through")
 
  }

    const addWatch = async (e) => {
      e.preventDefault();
      dispatch(addOneWatch(1, 2))
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

  // this is the remove function
  const removeWatch = async () => {
    await dispatch(removeOneWatch(1))
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
            <button onClick={(e) => handleSell()} type='button'>Purchase</button>
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
      <form >

        <button type='button' onClick={(e) => handleSell(e)}>Add A Watchlist</button>
      </form>
      <button onClick={() => removeWatch()}>remove</button> {/* this deletes */}
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

              <button onClick={() => (reset(), setOpenBuy(!openBuy), setOpenSell(false))}>Buy</button> {/*toggle button fuction as according to available position*/}
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
                      <strong>sneax id: {share.sneax_id}</strong>
                    </li>
                    <li>
                      <strong>Price: {share.price_per_share}</strong>
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
        <div>
        <h2>Watchlists</h2>
        <>
            {watchlists?.map(watchlist => {
                            return (
                                <>
                                <button onClick={(e) => userWatchList(e)} id={watchlist.id}>{watchlist.list_name}</button>
                              </>
                            )
                })}
                {watchState ? <ul>
                {allWatchs?.map(watch => {
                    for (let i = 0; i < sneaxs.length; i++) {
                      console.log('hello2', watchNumber)
                      console.log('hello3', watch.watchlist_id)
                        if (sneaxs[i].id === watch.sneax_id && watchNumber == watch.watchlist_id) {
                            return (
                                <>
                                <div>{watch.id}</div>
                              <div>{sneaxs[i].name}</div>
                              </>
                            )
                        }
                    }
                })}
            </ul> : ''}
                </>
        </div>
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
    {/* <Dashboard /> */}
    {main}
    </>
  );
}
export default CrudTesting;
