// action verbs
const ADD_WATCH ='watch/ADD_WATCH';
const LOAD_WATCHS ='watch/LOAD_WATCHS';
const GET_WATCH = 'watch/GET_WATCH';
const REMOVE_WATCH ='watch/REMOVE_WATCH';

// action creator
const addWatch = (watch) => {
    return {
        type: ADD_WATCH,
        watch
    };
}

const loadWatchs = (watch) => {
    return {
        type: LOAD_WATCHS,
        watch
    };
}

const getAWatch = (watch) => {
    return {
        type: GET_WATCH,
        watch
    };
}

const removeWatch = (watch) => {
    return {
        type: REMOVE_WATCH,
        watch
    };
}



// Thunks 
export const addOneWatch = (payload) => async(dispatch) => {
    const res = await fetch('/api/watch/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
    })
    if(!res.ok) throw res
    const watch = await res.json();
    dispatch(addWatch(watch));
    return watch;
    
}


export const getWatchs = () => async(dispatch) => {
    const res = await fetch('/api/watch/');
    const watchs = await res.json();
    dispatch(loadWatchs(watchs));
}

export const getOneWatch = (id) => async(dispatch) => {
    const res = await fetch(`/api/watch/${id}`);
    if(res.ok){
        const watch = await res.json();
        dispatch(getAWatch(watch));
         return watch;
    }
}


export const removeOneWatch = (id) => async(dispatch) => {
    const res = await fetch(`/api/watch/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id}),
    });
    if(!res.ok) throw res;
    const watch = await res.json();
    dispatch(removeWatch(watch));
    return watch;

}

// reducer  

const initialState = {}

const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WATCH:
            return {
                ...state,
                [action.watch.id]: action.watch
            }
        case LOAD_WATCHS:
            return {
                ...state,
                ...Object.fromEntries(action.watch.map((oneWatch) => [oneWatch.id, oneWatch]))
            }
        case REMOVE_WATCH:{
            const newState = {...state};
            delete newState[action.watch];
            return newState;
        }
    default: 
        return state;
    }
   
} 

export default watchReducer;