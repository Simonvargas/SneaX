// action verbs
const ADD_WATCH ='watch/ADD_LIST';
const LOAD_WATCH ='watch/LOAD_LIST';
const REMOVE_WATCH ='watch/REMOVE_LIST';

// action creator
const addWatch = (watch) => {
    return {
        type: ADD_WATCH,
        watch
    };
}

const loadWatch = (watch) => {
    return {
        type: LOAD_WATCH,
        watch
    };
}

const removeWatch = (watch) => {
    return {
        type: REMOVE_WATCH,
        watch
    };
}
// action thunk
export const addOneWatch = (payload) => async(dispatch) => {
    const res = await fetch('/api/watch/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
    })
    if(res.ok) {
        const watch = await res.json();
        dispatch(addWatch(watch));
        return watch;
    }
}

export const getWatchs = () => async(dispatch) => {
    const res = await fetch('/api/watch/');
    const watchs = await res.json();
    dispatch(loadWatch(watchs));
}







// reducer  

const initialState = {}

const watchReducer = (state = initialState, action) => {

} 