
const LOAD = 'shares/LOAD'
const SET_SHARES = 'shares/SET_SHARES'
const UPDATE_SHARE = 'shares/UPDATE_SHARE'
const REMOVE_SHARE = 'shares/REMOVE_SHARE'

const load = (shares) => ({
    type: LOAD,
    shares
})

const set = (shares) => ({
    type: SET_SHARES,
    shares
})

const update = (share) => ({
    type: UPDATE_SHARE,
    share
})

const remove = () => ({
    type: REMOVE_SHARE
})

export const getShares = () => async dispatch => {
    const res = await fetch('/api/shares/');
    const shares = await res.json();
    dispatch(load(shares))
}

export const purchase = (payload, id) => async dispatch => {
    const res = await fetch(`/api/shares/${id}`, {
        method: "POST",
        header: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(set(data))
        if (data.errors) {
            return data.errors
        }
    }
}

export const updateShare = (payload, id) => async dispatch => {
    const res = await fetch(`/api/shares${id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
    })

    const data = res.json()
    if (res.ok) dispatch(update(data))
}

export const deleteShare = (id) => async dispatch => {
    const res = await fetch(`/api/shares/${id}`, {
        method: "DELETE",
    })
    dispatch(remove())
    return res
}

const initialState = {}

const sharesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const all = {
                ...state
            }
            console.log('this is action tyooyooyo', action)
            action.shares.shares.forEach((share) => {
                all[share.id] = share;
            });
            return all;

        case SET_SHARES:
            const make = {
                ...state,
                [action.shares.id]: action.shares
            };
            return make;

        case REMOVE_SHARE:
            const destroy = {...state};
            delete destroy[action.shareId]

        case UPDATE_SHARE: {
            return {
                ...state,
                [action.share.id]: action.share
            }
        }

        default:
            return state;
    };
};

export default sharesReducer
