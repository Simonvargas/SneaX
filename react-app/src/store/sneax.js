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

const initialState = [];


export default function sneaxReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD: {
            const thisState = {
                ...state,
            };
            console.log('this is sneax action',action)
            action.sneaxs.sneaxs.forEach((sneax) => {
                thisState[sneax.id] = sneax
            })
            return thisState
        }
        default:
            return state;
    };
};
