import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getWatchs } from '../../store/watch';
import { allSneax } from '../../store/sneax';
import { getList } from '../../store/watchlist'

// import { getList } from '../../store/watchlist';

import './Dashboard.css'

function TestingWatch () {
    const dispatch = useDispatch ();

    const watchlists = Object.values(useSelector(state => state.watchlist))
    const sessionUser = useSelector(state => state.session.user)
    const allWatchs = Object.values(useSelector(state => state.watch))
    const sneaxs = useSelector((state) => Object.values(state.sneax))
    const sneaxId = sneaxs.map(sneax => sneax.id)
    const shares = useSelector((state) => Object.values(state.shares))

    const [watchState, setWatchstate] = useState(false)
    const [watchNumber, setWatchNumber] = useState(0)
    const [ purchaseShares, setPurchaseShares ] = useState('')
    const [ showEdit, setShowEdit ] = useState(false)
    const [ showTrade, setShowTrade ] = useState(false)
    const [ sellId, setSellId ] = useState('')
    const [ sellQty, setSellQty ] = useState('')
    const [ totalPosition, setTotalPosition ] = useState('')
    const [ shareQty, setShareQty ] = useState('')
    const [ sharePrice, setSharePrice ] = useState('')
    const [ shareId, setShareId ] = useState('')
    let [ totalAccount, setTotalAccount ] = useState(0)

    function userWatchList(e) {
        setWatchNumber(e.target.id)
        setWatchstate(true)
    }

    const reset = () => {
        // setTotalPosition()
        // setShareQty('')
        setPurchaseShares('')
        // setSharePrice('')
        // // setShareId('')
        // setMarketPrice('')
        // setSneakId('')
      }


    useEffect(() => {
        dispatch(allSneax());
        dispatch(getWatchs(sessionUser.id));
        dispatch(getList())
    }, [dispatch, sessionUser.id]);



    return (
        <>
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

                </>
        </div>
        {watchState ?
        <div className="testing-container">
            <h2>List of Watchs</h2>
            <ul>
                {allWatchs?.map(watch => {
                    for (let i = 0; i < sneaxs.length; i++) {
                        if (sneaxs[i].id === watch.sneax_id && watchNumber == watch.watchlist_id)  {
                            return (
                                <>
                                <div>{watch.id}</div>
                              <div>{sneaxs[i].name}</div>
                              </>
                            )
                        }
                    }
                })}
            </ul>
        </div>
    : ''}
    </>
    );

}

export default TestingWatch;
