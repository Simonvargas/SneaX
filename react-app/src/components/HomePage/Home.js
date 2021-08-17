import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import NavBar from '../Navigation/NavBar';

import { allSneax } from '../../store/sneax';
import * as sessionSlice from '../../store/shares';


import './Home.css'

function Home() {
  const dispatch = useDispatch()

  const sneax = useSelector((state) => Object.values(state.sneax))
  const shares = useSelector((state) => Object.values(state.shares))
  const [user, setUser] = useState({});
  const { userId }  = useParams();

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
  const [ SneakId, setSneakId ] = useState('')

  const [ openBuy, setOpenBuy ] = useState(false)
  const [ openSell, setOpenSell ] = useState(false)



  const history = useHistory()

  // const updateNumber

  useEffect(() => {
    dispatch(allSneax())
    dispatch(sessionSlice.getShares())
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${shareId}`);
      const user = await response.json();
      setUser(user);

    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  let content = null
  let shareContent = null
  let posted;

  const reset = () => {
    // setTotalPosition()
    setShareQty('')
    setPurchaseShares('')
    setSharePrice('')
    setShareId('')
    setMarketPrice('')
    setSneakId('')
  }

  const tradeSubmit = async (e) => {
    e.preventDefault();
    posted = await dispatch(sessionSlice.updateShare(sharePrice, purchaseShares, sellId))

    if (posted) {
        let answer = window.confirm("Are you sure you want to make this change?")
        if (answer) {
          history.push('/')
          history.go(0)
          // window.alert('change complete')
        } else {
          window.alert('change canceled')
        }

    }
  }



  const handleSell = async (e) => {
    e.preventDefault()
    posted = await dispatch(sessionSlice.deleteShare(shareId))
    alert("remove went through")
    history.go(0)
  }


  const handleBuy = async (e) => {
    e.preventDefault()
    posted = await dispatch(sessionSlice.purchase(marketPrice, ))
    alert("purchase went through")
    history.go(0)
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
                onChange={(e) => setPurchaseShares(e.target.value)}
              />
            </label>
            <button onClick={(e) => handleBuy(e)} type='button'>Purchase</button>
          </form>
        </>
    )
  } else {
    content = (
        <></>
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
      <form onSubmit={handleSell}>

      </form>
      <button onClick={(e) => handleSell(e)}>Sell</button>
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



  return (
    <>
    <NavBar/>
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
              </ul>
    )}})}
    <h2>total account value: </h2>
    {sneax?.map(sneak => (
          <>

            <Link to={`/sneax/${sneak.id}`}>
              <ul>

                  <li>
                      <strong>{sneak?.id}</strong> {}
                  </li>
                  <ul>
                      <li>
                          <strong>Brand: {sneak?.brand_name}</strong> {}
                      </li>
                      <li>
                          <strong>Price: {sneak?.market_price}</strong> {}
                      </li>
                      <li>
                          <strong>Name: {sneak?.name}</strong> {}
                      </li>
                      <li>
                          <img src={sneak?.image} width='500px'/>
                      </li>
                      <li>
                          <strong>Details: {sneak?.details}</strong> {}
                      </li>
                  </ul>
              </ul>
            </Link>
            <button type='button'
            onClick={() => (reset(), setShowTrade(false), setShowEdit(!showEdit), setMarketPrice(sneak.market_price), setSneakId(sneak.id))}
            >
              Buy
            </button>
          </>
    ))}
      {content}
    </>
  );
}
export default Home;
