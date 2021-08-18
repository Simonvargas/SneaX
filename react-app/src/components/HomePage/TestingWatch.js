import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getWatchs } from '../../store/watch';


// import { getList } from '../../store/watchlist';

function TestingWatch () {
    const dispatch = useDispatch ();

    const sessionUser = useSelector(state => state.session.user)
    const allWatchs = Object.values(useSelector(state => state.watch))


    useEffect(() => {
        dispatch(getWatchs(sessionUser.id));
    }, [dispatch, sessionUser.id]);

    return (
        <div className="testing-container">
            <h1>Hello testing page</h1>
            <h2>List of Watchs</h2>
            <ul>
                {allWatchs?.map(watch => <li>
                    {watch.sneax_id}

                </li>)}
            </ul>
        </div>
    );

}

export default TestingWatch;