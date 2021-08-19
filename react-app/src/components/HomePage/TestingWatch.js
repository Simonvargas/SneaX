import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getWatchs } from '../../store/watch';
import { allSneax } from '../../store/sneax';
import { getList } from '../../store/watchlist'
import { removeOneWatch } from '../../store/watch';

// import { getList } from '../../store/watchlist';

import './Dashboard.css'

function TestingWatch () {
    const dispatch = useDispatch ();

    const watchlists = Object.values(useSelector(state => state.watchlist))
    const sessionUser = useSelector(state => state.session.user)
    const allWatchs = Object.values(useSelector(state => state.watch))
    const sneaxs = useSelector((state) => Object.values(state.sneax))

    const [watchState, setWatchstate] = useState(false)
    const [watchNumber, setWatchNumber] = useState(0)
    const [item, setDeleteItem] = useState(0)

    const history = useHistory()
    function userWatchList(e) {
        setWatchNumber(e.target.id)
        setWatchstate(true)
    }



    useEffect(() => {
        dispatch(allSneax());
        dispatch(getWatchs(sessionUser.id));
        dispatch(getList())
    }, [dispatch, sessionUser.id]);

    async function deleteWatch(e){
      await dispatch(removeOneWatch(Number(item)))
      // history.go(0)
    }

    return (
        <>
        <div className='watchlist-container'>
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
        
        {watchState ?
        <div className="testing-container">
            <h2>List of Watchs</h2>
            <ul>
                {allWatchs?.map(watch => {
                    for (let i = 0; i < sneaxs.length; i++) {
                        if (sneaxs[i].id === watch.sneax_id && watchNumber == watch.watchlist_id)  {
                            return (
                              <>
                              <div className='watch-items'>
                              <Link className='items-link' to={`/sneax/${sneaxs[i].id}`}>
                                <div>
                                <img src={sneaxs[i].image}></img> 
                                </div>
                                {sneaxs[i].name}
                                </Link>
                                <button onClick={() => deleteWatch()} id={watch.id} className='delete-btn-watch'>Delete</button>
                                </div>
                              </>
                            )
                        }
                    }
                })}
            </ul>
        </div>
    : ''}
  </div>

    </>
    );

}

export default TestingWatch;
