import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { allSneax } from '../../store/sneax';
import * as listAction from '../../store/watchlist'
import { removeOneWatch, getWatchs } from '../../store/watch';

import './Watchlist.css'

function Watchlist () {
    const dispatch = useDispatch ();

    const watchlists = (useSelector(state => state.watchlist?.watchlist))
    const sessionUser = useSelector(state => state.session.user)
    const allWatchs = Object.values(useSelector(state => state.watch))
    const sneaxs = useSelector((state) => Object.values(state.sneax))

    const [watchState, setWatchstate] = useState(false)
    const [watchNumber, setWatchNumber] = useState(0)
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
      reset()
    }

    async function update() {
      await dispatch(listAction.editList(listName ,sessionUser.id, editId))
      reset()
    }

    async function deleteList() {
      await dispatch(listAction.removeList(listId))
      reset()
    }

    const reset = () => {
      dispatch(listAction.getList())
      setUpdateList(false)
      setCreateList(false)
      setListName('')

    }

    useEffect(() => {
        dispatch(allSneax());
        dispatch(getWatchs());
        dispatch(listAction.getList())
    }, [dispatch, listAction]);

    async function deleteWatch(e){
      await dispatch(removeOneWatch(Number(e.target.id)))
      dispatch(getWatchs());
    }
    return (
        <>
        <div className='watchlist-container'>
            <div className='shares'>
                <h1>Watchlists</h1>
                <div>
                    <i class="fas fa-plus" title='Create A List' onClick={createAList}></i>
                    <i class="far fa-edit" title='Update Watchlist 'onClick={updateAList}></i>
                </div>

            </div>

            {createList ?
            <div>
              <input className='input2' onChange={(e) => setListName(e.target.value)} placeholder='List name' />
                <button className='test-btn' onClick={() => createNew()}>Create</button>
            </div>
            : ''}
            {updateList ?
                <div>

                <div><select onChange={(e) => setEditId(e.target.value)}> {watchlists?.map(watchlist => {
                            return (
                                <option value={watchlist.id} id={watchlist.id} key={watchlist.id}>{watchlist.list_name}</option>
                            )
            })} </select>
          <input className='input2' onChange={(e) => setListName(e.target.value)} placeholder='New name'></input>
          <button className='test-btn' onClick={() => update()} >Update</button> </div>
              </div> : ''}

            <>
            <div className='watchlist-bttns-container'>
                <div className='testing-btns2'>
                {watchlists?.map(watchlist => {
                    return (
                        <div className='watchlist-bttn'>
                            <button className='watchlist-button' onClick={(e) => (
                                userWatchList(e),
                                setListId(watchlist?.id))}
                                id={watchlist?.id}>{watchlist?.list_name}
                            </button>
                        </div>
                    )
                })}
                    </div>
            </div>
            </>

        {watchState ?
        <div className="testing-container">
            <h2>List of Watchs</h2>
            <div>
                {allWatchs?.map(watch => {
                    for (let i = 0; i < sneaxs.length; i++) {
                        if (sneaxs[i].id === watch.sneax_id && watchNumber == watch.watchlist_id)  {
                            return (
                              <>
                                <div className='test-container-ignore'>
                                    <Link className='items-link' to={`/sneax/${sneaxs[i].id}`}>
                                        <div className='watch-items-container'>
                                            <div className='watch-items-box'>
                                                <img src={sneaxs[i].image}></img>
                                            </div>
                                            <div div className='watch-items-box'>
                                                {sneaxs[i].name}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='delete-list-bttn'>
                                        <i class="fas fa-trash-alt" tite='Delete Watch' onClick={(e) => deleteWatch(e)} id={watch.id} ></i>
                                    </div>
                                </div>
                              </>
                            )
                          }
                        }
                      })}
                      <div className='watchlist-bttn'>
                        <button onClick={(e) => deleteList(e)}>delete this list</button>
                    </div>
            </div>
        </div>
    : ''}
  </div>

    </>
    );

}

export default Watchlist;
