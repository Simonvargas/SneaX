const LOAD = 'sneax/LOAD'

const load = (sneaxs) => ({
    type: LOAD,
    sneaxs
})

export const allSneax = () => async (dispatch) => {
    const res = await fetch('/api/sneax/');
    const sneax = await res.json()
    dispatch(load(sneax))
}

export const getOneSneax = (id) => async (dispatch) => {
    const res = await fetch(`/api/sneax/${id}`)

    if (res.ok) {
        const sneax = await res.json
        dispatch()
    }
}

const initialState = {
};


export default function sneaxReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD: {
            const thisState = {
                ...state,
            };
            action.sneaxs.sneaxs.forEach((sneax) => {
                thisState[sneax.id] = sneax
            })
            return thisState
        }
        default:
            return state;
    };
};
