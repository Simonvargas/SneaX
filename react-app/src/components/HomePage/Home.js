
import React, { useState, useEffect } from 'react';
import {  useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionAction from '../../store/session';
import * as shareAction from '../../store/shares';
import { allSneax } from '../../store/sneax';
import { getList } from '../../store/watchlist'
import { Modal } from '../../context/Modal';
import Watchlist from '../Watchlist/Watchlist';
import SplashPage from './SplashPage'
import NavBar from '../Navigation/NavBar';

// const faker = require('faker/locale/de')

import { LineChart, BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import './Dashboard.css'


function Home() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
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
  const [ openBuy, setOpenBuy ] = useState(false)
  const [ openSell, setOpenSell ] = useState(false)
  const [ showGraph, setShowGraph ] = useState(true)

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(allSneax())
    dispatch(shareAction.getShares())
    dispatch(sessionAction.authenticate())
    dispatch(getList())

  }, []);

  let content = null
  let shareContent = null
  let main = null
  let posted;
  let totalAccount = 0


  if (!user) {
    return null;
  }


  const reset = () => {
    setPurchaseShares('')
    dispatch(shareAction.getShares())
    dispatch(sessionAction.authenticate())
    handleCancel()
    setShowTrade(false)
  }

  {/* -------------------------------------------edit purchase shares------------------------------------------------------ */}

  const tradeSubmit = async (e) => {
    e.preventDefault();
    let answer = window.confirm("Are you sure you want to make this change?")
    if (answer) {
      if (current[0].wallet > (purchaseShares * sharePrice)) {
        posted = await dispatch(shareAction.updateShare(sharePrice, (Number(sellQty) + Number(purchaseShares)), shareId))
        await dispatch(sessionAction.updateUser(sessionUser?.wallet -(purchaseShares * sharePrice), current[0].id))
        reset()
        window.alert("change complete")
      } else {
        window.alert('change canceled')
      }
    }
  }

  {/* -------------------------------------------delete all shares if last------------------------------------------------------ */}

  const handleSell = async () => {
    posted = await dispatch(shareAction.deleteShare(shareId))
    await dispatch(sessionAction.updateUser((totalPosition + sessionUser.wallet), current[0].id))
    reset()
    alert("Remove successful")
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
            await dispatch(sessionAction.updateUser(sessionUser.wallet + (purchaseShares * sharePrice), current[0].id))
            reset()
            window.alert("Change complete")
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
        await dispatch(sessionAction.updateUser(sessionUser.wallet -(purchaseShares * marketPrice), current[0].id))
        reset()
        alert("Purchase completed")
      }
    } else {
      alert("you too broke")
    }
  }

  {/* -------------------------------------------toggle sell/buy mod ------------------------------------------------------ */}

  if (showEdit) {
    content = (
        <>
          <form
          className='sell_form_container'>
            <label> Number Of Shares
              <input type='number' value={purchaseShares} onChange={(e) => (setPurchaseShares(e.target.value), setTotalPosition(e.target.value * marketPrice))}
              />
            </label>
            <button onClick={(e) => handleBuy(e)} type='button'>Purchase</button>
          </form>
        </>
    )
  }

  if (openBuy) {
    shareContent = (
      <div className='dash-shares-form-container'>
            <form className='shares-form' onSubmit={(e) => tradeSubmit(e)} >

              <div className='form-divs'>
              <h1>Buy More</h1>
              <label> Number Of Shares</label>
              <div>{sellQty}</div>
              </div>

              <div className='form-divs'>
              <label> Total Position </label>
              <div>{totalPosition}</div>
              </div>

              <div className='form-divs'>
              <label> Purchase quantity</label>
              <input type='number' value={purchaseShares} min='0' onChange={(e) => setPurchaseShares(e.target.value)} />
              </div  >

              <div className='form-divs'>
                <button onClick={(e) => tradeSubmit(e)} type='button'>Purchase</button>
              </div>
            </form>
    </div>
    )
  } else if (openSell) {
    shareContent = (
      <div className='dash-shares-form-container'>

        <form className='shares-form' onSubmit={(e) => tradeSell(e)}>

          <div className='form-divs'>
            <h1>Sell</h1>
            <label> Sell quantity</label>
            <input type='number' value={purchaseShares} min='0' onChange={(e) => setPurchaseShares(e.target.value)} />
          </div>
          <div className='form-divs'>
            <button onClick={(e) => tradeSell(e)} type='button'>Sell</button>
          </div>
        </form>
    </div>
    )
  }

  {/* -------------------------------------------graph------------------------------------------------------ */}

  let graphContent = null
  // const data = [{name: 'page A', uv: 100, pv: 2400, amt: 2400}]
  const data = []
  function dataPts() {
    let test = shares
    test.pop()

    test?.map((share, index) => {
      if (test) {
        const sharep = share?.price_per_share * share.number_of_shares
        data.push({name: `${share.sneax?.brand_name}`, uv: `${sharep}`, pv: 2400, amt: 2400})

      }
    })
  }
  // dataPts()

  if (showGraph) {
    dataPts()
    graphContent = (
      <>
      <ResponsiveContainer width="100%" height="100%">
            <LineChart  data={data}>
              <Line type='monotone' dataKey='uv' stroke='#d123d2' activeDot={{ r: 8 }}/>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" padding={{ top: 100, right: 30, left: 30, bottom: 0}}/>
              {/* <Line type='monotone' dataKey={'uv'*.6} stroke='#d123d2' activeDot={{ r: 8 }} /> */}
              <YAxis />
              <Tooltip />
            </LineChart>

      </ResponsiveContainer>

      </>
    )
  }

  {/* -------------------------------------------close mods------------------------------------------------------ */}

  function handleCancel() {
    if (openBuy || openSell) {
      setOpenBuy(false)
      setOpenSell(false)
    } else {
      setShowTrade(false)
    }
  }

  if (showTrade) {
    content = (
        <div className='sell_form_container'>
          {showModal && (
            <Modal>
              <div className='buy-sell-bttn-container'>
                <div className='buy-sell-bttns-box'>
                  <div className='shares-buy-bttn'>
                    <button onClick={() => (setOpenBuy(!openBuy), setOpenSell(false))}>Buy more</button>
                  </div>
                  <div className='shares-sell-bttn'>
                    <button onClick={() => (setOpenSell(!openSell), setOpenBuy(false))}>Sell</button>
                  </div>
                  <div className='shares-cancel-bttn'>
                    <button onClick={() => handleCancel()}>Cancel</button>
                  </div>
                </div>
              </div>
              {shareContent}
            </Modal>
          )}
        </div>
    )
  }

  if (sessionUser) {
    main = (
      <>
      <NavBar />
      <div className="sneax-dashboard-container">
{/* -------------------------------------------dash start------------------------------------------------------ */}
        <div className= 'sneax-shares-container'>
          <div className='dash-shares-container'>
            <div className='dash-shares-box'>
              <div className='shares'>
                <h1>Shares</h1>
              </div>
                {shares?.map(share => {
                        if (Number(share.sneax_id)) {
                          return (
                              <div >
                                <Link className="sneax-link" style={{ textDecoration: 'none' , color: 'black'}} to={`/sneax/${share.sneax_id}`}>
                                  <div className='single-sneax-container'>
                                    <div className='sneax-name-shares'>
                                      <div className='dash-sneax-info'>
                                        <p>{share.sneax.name}</p>
                                      </div>
                                      <div className='dash-sneax-info'>
                                        <p>$ {share.price_per_share}</p>
                                      </div>
                                    </div>
                                    <div className='sneax-name-shares'>
                                      <div className='dash-sneax-info'>
                                        <p>{share.number_of_shares} Shares</p>
                                      </div>
                                      <div className='dash-sneax-info'>
                                        <p>Total Position: ${share.number_of_shares * share.price_per_share}</p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>

                                <div className='trade-bttn'>
                                  <button onClick={() => (
                                      setShowModal(true),
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
              <Watchlist />
          </div>
        </div>
        {/* -------------------------------------------dash split------------------------------------------------------ */}
            <div className='sneax-dash-info-box'>
              <div className='sneax-name-brand-box'>
                <div className='name'>
                  <h1 className="sneax-name">$ {totalAccount}</h1>
                </div>
                <h2 className='sneax-brand'>$200 2.00% Today</h2>
              </div>
              <div className='sneax-graph'>
                {/* <button onClick={() => setShowGraph(!showGraph)}>show graph</button> */}
                {graphContent}
              </div>
              <div className='buying-power-container'>
                <div><h1 className='dash-buying-power'>Buying Power</h1></div>
                <div><h1 className='dash-wallet'>$ {sessionUser?.wallet}</h1></div>
              </div>
              <div className='random-dash'>
                <p>For more information, see our Privacy Policy.</p>
              </div>
            </div>
      </div>
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
