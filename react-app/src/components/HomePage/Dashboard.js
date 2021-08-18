import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { allSneax } from '../../store/sneax';
import { getShares } from '../../store/shares';
import NavBar from '../Navigation/NavBar';

import './Home.css'

function Dashboard() {
  const dispatch = useDispatch()
  const sneax = useSelector((state) => Object.values(state.sneax))
  const shares = useSelector((state) => Object.values(state.shares))
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const [ showEdit, setShowEdit ] = useState(false)
  const [ showSell, setShowSell ] = useState(false)
  const [ sellId, setSellId ] = useState('')
  const [ sellQty, setSellQty ] = useState('')
  const [ numberShares, setNumber ] = useState('')
  const sessionUser = useSelector(state => state.session.user)
  console.log('hello', sessionUser)
  useEffect(() => {
    dispatch(allSneax())
    dispatch(getShares())
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


  if (showEdit) {
    content = (
        <>
          <form> 
            <label> number of shares
              <input
                type='number'
                value={null}
                onChange={null}
              />
            </label>
            <button>Purchase</button>
          </form>
        </>
    )
  } else {
    content = (
        <></>
    )
  }

  if (showSell) {
    content = (
        <div className='sell_form_container'>
            <form className='sell_form_mod'>
              <label> number of shares
                <input
                  type='number'
                  value={sellQty}
                  onChange={null}
                />
              </label>
              <label> number of shares
                <input
                  type='number'
                  value={null}
                  onChange={null}
                />
              </label>
              <button>Buy</button> {/*toggle button fuction as according to available position*/}
              <button>Sell</button>
            </form>
        </div>
    )
  }



  return (
    <>
    <NavBar />
    {/* {shares?.map(share => (
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
                  onClick={() => (setShowSell(!showSell), setSellId(share.sneax_id), setSellQty(share.number_of_shares))}
                >trade</button>
              </ul>
    ))}
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
            <button type='button' onClick={() => setShowEdit(!showEdit)}>
              Buy
            </button>
          </>
    ))}
      {content} */}
    </>
  );
}
export default Dashboard;
