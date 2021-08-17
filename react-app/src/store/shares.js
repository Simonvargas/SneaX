
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

export const purchase = (price_per_share, purchaseShares, id) => async dispatch => {
    const res = await fetch(`/api/shares/${id}`, {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            price_per_share,
            number_of_shares: purchaseShares,
        }),
    })
    const data = await res.json();

    if (res.ok) {
        dispatch(set(data))
        if (data.errors) {
            return data.errors
        }
    }
    return true
}

export const updateShare = (price_per_share, purchaseShares, id) => async dispatch => {
    const res = await fetch(`/api/shares/users/${id}`, {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            price_per_share,
            number_of_shares: purchaseShares,
        }),
    })

    const data = res.json()
    if (res.ok) dispatch(update(data))
    return true
}

export const deleteShare = (id) => async dispatch => {
    const res = await fetch(`/api/shares/remove/${id}`, {
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
            // console.log('this is action',action)
            action.shares.shares.forEach((share) => {
                all[share.id] = share;
            });
            action.shares.sneax.forEach((sneak) => {
                all[sneak.id + '-data'] = sneak
            })
            return all;

        case SET_SHARES:
            // const make = {
            //     ...state,
            //     [action.shares.id]: action.shares
            // };
            // return make;
            return { shares : action.shares }

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
