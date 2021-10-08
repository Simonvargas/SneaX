
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
  }

  {/* -------------------------------------------edit purchase shares------------------------------------------------------ */}

  const tradeSubmit = async (e) => {
    e.preventDefault();
    let answer = window.confirm("Are you sure you want to make this change?")
    if (answer) {
      if (current[0].wallet > (purchaseShares * sharePrice)) {
        posted = await dispatch(shareAction.updateShare(sharePrice, (Number(sellQty) + Number(purchaseShares)), shareId))
        await dispatch(sessionAction.updateUser(sessionUser?.wallet -(purchaseShares * sharePrice), current[0].id))
        window.alert("change complete")
        reset()
      } else {
        window.alert('change canceled')
      }
    }
  }

  {/* -------------------------------------------delete all shares if last------------------------------------------------------ */}

  const handleSell = async () => {
    posted = await dispatch(shareAction.deleteShare(shareId))
    await dispatch(sessionAction.updateUser((totalPosition + sessionUser.wallet), current[0].id))
    alert("Remove successful")
    reset()
  }

    const tradeSell = async (e) => {
      e.preventDefault();
      console.log('hi')
      let answer = window.confirm("Are you sure you want to make this sell?")
      if (answer) {
        if (sellQty >= purchaseShares) {
          if ((Number(sellQty) - Number(purchaseShares) === 0)) {
            handleSell()
          } else {
            posted = await dispatch(shareAction.updateShare(sharePrice, (Number(sellQty) - Number(purchaseShares)), shareId))
            await dispatch(sessionAction.updateUser(sessionUser.wallet + (purchaseShares * sharePrice), current[0].id))
            window.alert("Change complete")
            reset()
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
        alert("Purchase completed")
        reset()
      }
    } else {
      alert("you too broke")
    }
  }

  {/* -------------------------------------------toggle sell/buy mod mod------------------------------------------------------ */}

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

  {/* -------------------------------------------close mods------------------------------------------------------ */}

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
          {showModal && (
            <Modal>
              <div className='buy-sell-bttn-container'>
                <div className='buy-sell-bttns-box'>
                  <div className='shares-buy-bttn'>
                    <button onClick={() => (reset(), setOpenBuy(!openBuy), setOpenSell(false))}>Buy more</button>
                  </div>
                  <div className='shares-sell-bttn'>
                    <button onClick={() => (reset(), setOpenSell(!openSell), setOpenBuy(false))}>Sell</button>
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


  return (
    <>
    {main}
    </>
  );
}
export default Home;
