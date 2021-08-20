import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { getWatchs } from '../../store/watch';
import { allSneax } from '../../store/sneax';
import * as listAction from '../../store/watchlist'
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
    const [createList, setCreateList] = useState(false)
    const [updateList, setUpdateList] = useState(false)
    const [listName, setListName] = useState('')
    const [listId, setListId] = useState('')
    const [editId, setEditId] = useState('')

    const history = useHistory()
    function userWatchList(e) {
        setWatchNumber(e.target.id)
        setWatchstate(true)
    }

    async function createAList() {
      setUpdateList(false)
      setCreateList(true)
      setListName('')

    }
    async function updateAList() {
      setCreateList(false)
      setUpdateList(true)
      setListName('')
      if (watchlists[0]) {
        setEditId(watchlists[0].id)
      }
    }

    async function createNew() {
      await dispatch(listAction.createList(listName ,sessionUser.id))
    }

    async function update() {
      await dispatch(listAction.editList(listName ,sessionUser.id, editId))
    }

    async function deleteList() {
      await dispatch(listAction.removeList(listId))
      history.go(0)
    }

    useEffect(() => {
        dispatch(allSneax());
        dispatch(getWatchs(sessionUser.id));
        dispatch(listAction.getList())
    }, [dispatch, sessionUser.id]);

    async function deleteWatch(e){
      await dispatch(removeOneWatch(Number(e.target.id)))
      history.go(0)
    }
    return (
        <>
        <div className='watchlist-container'>
            <h2>Watchlists</h2>
            <div className='watchlist-add-edit'>
            <button onClick={createAList}>Create WatchList</button>
            <button onClick={updateAList}>Update WatchList</button>

            {createList? <div>
              <input
                onChange={(e) => setListName(e.target.value)}
                placeholder='List name' />
            <button
            onClick={() => createNew()
            }>Create</button>
            </div> : ''}
            {updateList? <div>

              <div><select onChange={(e) => setEditId(e.target.value)}> {watchlists?.map(watchlist => {
                            return (
                                <option value={watchlist.id} id={watchlist.id}>{watchlist.list_name}</option>
                            )
          })} </select>
          <input onChange={(e) => setListName(e.target.value)} placeholder='New name'></input>
          <button onClick={() => update()} >add</button> </div>
              </div> : ''}

            </div>
            <>
            <div className='testing-btns2'>
            {watchlists?.map(watchlist => {
                            return (
                                <>
                                <button onClick={(e) => (userWatchList(e), setListId(watchlist.id))} id={watchlist.id}>{watchlist.list_name}</button>
                              </>
                            )
                })}
                </div>
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
                                <button onClick={deleteWatch} id={watch.id} className='delete-btn-watch'>Delete</button>
                                </div>
                              </>
                            )
                          }
                        }
                      })}
                      <button onClick={(e) => deleteList(e)}>delete this list</button>
            </ul>
        </div>
    : ''}
  </div>

    </>
    );

}

export default TestingWatch;
