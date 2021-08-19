import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionAction from '../../store/session';
import * as shareAction from '../../store/shares';
import { allSneax } from '../../store/sneax';
import { getList } from '../../store/watchlist'
import { Modal } from '../../context/Modal';
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
  const [showModal, setShowModal] = useState(false);

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
    alert("Remove successful")
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
            window.alert("Change complete")
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
      }
      else {
        posted = await dispatch(shareAction.purchase(marketPrice, purchaseShares, sneakId))
        await dispatch(sessionAction.updateUser(wallet -(purchaseShares * marketPrice), current[0].id))
        alert("Purchase completed")
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
              <input type='number' value={purchaseShares} onChange={(e) => (setPurchaseShares(e.target.value), setTotalPosition(e.target.value * marketPrice))}
              />
            </label>
            <button onClick={(e) => handleBuy(e)} type='button'>Purchase</button>
          </form>
        </>
    )
  }

  if (showTrade) {
    content = (
        <div className='sell_form_container'>

              <button onClick={() => (reset(), setOpenBuy(!openBuy), setOpenSell(false))}>Buy</button>
              <button onClick={() => (reset(), setOpenSell(!openSell), setOpenBuy(false))}>Sell</button>
              <button onClick={() => handleCancel()}>Cancel</button>
              {shareContent}
        </div>
    )
  }


  if (openBuy) {
    shareContent = (
      <>
            <form
              onSubmit={(e) => tradeSubmit(e)} className='sell_form_mod'>
              <label> number of shares
                <input type='number' value={sellQty} onChange={null}/>
              </label>
              <label> Sneax Id
                <input type='number' value={sellId} onChange={null} />
              </label>
              <label> total position
                <input type='number' value={totalPosition} onChange={null} />
              </label>
              <label> number of shares
                <input type='number' value={shareQty} onChange={null} />
              </label>
              <label> number
                <input type='number' value={purchaseShares} min='0' onChange={(e) => setPurchaseShares(e.target.value)} />
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
          <input type='number' value={purchaseShares} min='0' onChange={(e) => setPurchaseShares(e.target.value)} />
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


  if (sessionUser) {
    main = (
      <>
      <NavBar/>
      <div className="sneax-dashboard-container">

        <div className= 'sneax-shares-container'>
          <div className='dash-shares-container'>
            <div className='dash-shares-box'>
              <div className='shares'>
                <h1>Shares</h1>
              </div>
                {shares?.map(share => {
                        if (Number(share.sneax_id)) {
                          return (
                              <div className='single-sneax-container'>
                                <Link className="sneax-link" style={{ textDecoration: 'none' , color: 'black'}} to={`/sneax/${share.sneax_id}`}>
                                  <div className='sneax-name-shares'>
                                    <div className='share-sneax-name'><p>{share.sneax.name}</p></div>
                                    <div className='sneax-shares-price'><p>$ {share.price_per_share}</p></div>
                                  </div>
                                  <div className='sneax-price-total'>
                                  <div className='sneax-price'><p>{share.number_of_shares} Shares</p></div>
                                  <div className='sneax-total'><p>Total Position: ${share.number_of_shares * share.price_per_share}</p></div>
                                  </div>
                                </Link>
                                <div className='trade-bttn'>
                                  <button onClick={() => (
                                      reset(),
                                      setShowEdit(false),
                                      setShowTrade(!showTrade),
                                      setSellId(share.sneax_id),
                                      setSellQty(share.number_of_shares),
                                      setTotalPosition(share.number_of_shares * share.price_per_share),
                                      setShareQty(share.number_of_shares), setSharePrice(share.price_per_share),
                                      setShareId(share.id))}>Trade
                                  </button>
                                </div>
                                <div hidden="true">
                                  {totalAccount += (share.number_of_shares * share.price_per_share)}.
                                </div>
                              </div>

                          )
                        }
                })}
              </div>
              <TestingWatch />
          </div>



        </div>
        <div clasName='sneax-dash-container'>
          <div className='sneax-info-container'>
            <div className='sneax-dash-info-box'>
              <div className='sneax-name-brand-box'>
                <div className='name'><h1 className="sneax-name">$ {totalAccount}</h1></div>
                <h2 className='sneax-brand'>$200 2.00% Today</h2>
              </div>
              <div className='sneax-graph'>
                <h1>PUT GRAPH HERE</h1>
              </div>
              <div className='buying-power-container'>
                <div><h1 className='dash-buying-power'>Buy Power</h1></div>
                <div><h1 className='dash-wallet'>$ {wallet}</h1></div>
              </div>
              <div className='random-dash'>
                <p>For more information, see our Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {
        wallet ? [<h2>Total buying power: {wallet}</h2>, <h2>Total investing: {totalAccount} </h2> ]: null
          //   <h2>total account value: </h2>
      } */}
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
