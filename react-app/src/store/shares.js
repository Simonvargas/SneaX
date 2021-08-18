
const LOAD = 'shares/LOAD'
const LOAD_ONE = 'shares/LOAD_ONE'
const SET_SHARES = 'shares/SET_SHARES'
const UPDATE_SHARE = 'shares/UPDATE_SHARE'
const REMOVE_SHARE = 'shares/REMOVE_SHARE'

const load = (shares) => ({
    type: LOAD,
    shares
})

const one = (shares) => ({
    type: LOAD_ONE,
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

const remove = (id) => ({
    type: REMOVE_SHARE
})

export const getShares = () => async dispatch => {
    const res = await fetch('/api/shares/');
    const shares = await res.json();
    dispatch(load(shares))
}


export const getSharesWithId = (id) => async dispatch => {
    const res = await fetch(`/api/shares/${id}`);
    const shares = await res.json();
    dispatch(one(shares))
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
    dispatch(remove(res))
    return res
}

const initialState = {}

const sharesReducer = (state = initialState, action, id) => {
    switch (action.type) {
        case LOAD:
            // if (state) {
            //     state = null
            //     const all = {
            //         ...state
            //     }
            //     all["total"] = []
            //     all["shares"] = {}
            //     if (action.shares.shares) {
            //         action.shares.shares.forEach((share) => {
            //             all[share.id] = share;
            //             all['total'].push(share.sneax_id)
            //         });

            //     }
            //     return all;
            // }
            case LOAD:
            if (state) {
                state = null
                const all = {
                    ...state
                }
                all["total"] = []
                if (action.shares.shares) {
                    action.shares.shares.forEach((share) => {
                        action.shares.sneax.forEach((sneaker) => {
                            if (share.sneax_id === sneaker.id) {
                                all[share.id] = {...share, sneax: {...sneaker} }
                                all['total'].push(share.sneax_id)
                        }
                    })
                });

                }
                return all;
            }
        case LOAD_ONE: {
            if (state) {
                state = null
                const all = {
                    ...state
                }
              if (action.shares.exists) {
                    action.shares.exists.forEach((share) => {
                        all['exists'] = share;
                    });

                }
                return all;
            }
        }

        case SET_SHARES:
            return { shares : action.shares }

        case REMOVE_SHARE:
            const data = {...state};
            return data

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
