import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getWatchs } from '../../store/watch';
import { allSneax } from '../../store/sneax';
import { getList } from '../../store/watchlist'

// import { getList } from '../../store/watchlist';

function TestingWatch () {
    const dispatch = useDispatch ();

    const watchlists = Object.values(useSelector(state => state.watchlist))
    const sessionUser = useSelector(state => state.session.user)
    const allWatchs = Object.values(useSelector(state => state.watch))
    const sneaxs = useSelector((state) => Object.values(state.sneax))
    const sneaxId = sneaxs.map(sneax => sneax.id)
    // console.log("WHATTTT", watchlists)
    // console.log("NOOOO", allWatchs)
// if sneaxId === watch.sneax_id then return sneax.name?? trying to figure how to get the name of the sneax to populate 


// console.log('hello', userWatchList)

    useEffect(() => {
        dispatch(allSneax());
        dispatch(getWatchs(sessionUser.id));
        dispatch(getList())
    }, [dispatch, sessionUser.id]);

    console.log(watchlists)
    return (
        <div className="testing-container">
            <h1>Hello testing page</h1>
            <h2>List of Watchs</h2>
            <ul>
                {allWatchs?.map(watch => {
                    console.log('noo', watch)
                    for (let i = 0; i < sneaxs.length; i++) {
                        if (sneaxs[i].id === watch.sneax_id) {
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
    );

}

export default TestingWatch;