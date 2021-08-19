// action verbs
const ADD_LIST = 'watchlist/ADD_LIST';
const LOAD_LIST = 'watchlist/LOAD_LIST';
const UPDATE_LIST = 'watchlist/UPDATE_LIST';
const DELETE_LIST = 'watchlist/DELETE_LIST';



// action creators

const addList = (list) => ({
    type: ADD_LIST,
    list
});


const loadList = (list) => ({
    type: LOAD_LIST,
    list
});

const updateList = (list) => ({
    type: UPDATE_LIST,
    list
});

const deleteList = (listId) => ({
    type: DELETE_LIST,
    listId
});



// thunk

export const createList = (list_name, user_id) => async (dispatch) => {
    const res = await fetch(`/api/watchlist/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( {list_name, user_id} ),
    });
    if(!res.ok) throw res
    const new_list= await res.json();
    dispatch(addList(new_list));
    return new_list;
}

export const getList = () => async (dispatch) => {
    const res = await fetch(`/api/watchlist/`)
    const list= await res.json();
    dispatch(loadList(list));
    return list;
}

export const editList = (list_name, user_id, id) => async (dispatch) => {
    const response = await fetch(`/api/watchlist/edit/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({list_name, user_id}),
    });
    if(!response.ok) throw response
    const list = await response.json();
    dispatch(updateList(list));
    return list;
}

export const removeList = (id) => async (dispatch) => {
    console.log(id, "THIS IS ID")
    const res = await fetch(`/api/watchlist/delete/${id}`, {
        method : 'DELETE',
    });

    dispatch(deleteList(res))
}

// reducer.

const initialState = {

};

const watchlistReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ADD_LIST:
            return {
                ...state,
                [action.list.id]: action.list
            }
        case LOAD_LIST:
            const all = {...state};
            action.list.watchlist.forEach((oneList) => {
                all[oneList.id] = oneList;
            });
            return all
        case UPDATE_LIST:
            return {
                ...state,
                [action.list.id]: action.list
            }
        case DELETE_LIST:{
           const newState = {...state}
           delete newState[action.listId]
           return newState
        }

        default:
            return state;
    }
}

export default watchlistReducer;
