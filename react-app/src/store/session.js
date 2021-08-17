// constants
const LOAD = 'session/LOAD'
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_USER = 'session/UPDATE_USER';

const load = (user) => ({
  type: LOAD,
  user
})

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const update = (user) => ({
    type: UPDATE_USER,
    user
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, first_name, last_name, date_of_birth, wallet, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      first_name,
      last_name,
      date_of_birth,
      wallet,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const loadCurrent = (id) => async dispatch => {
    const res = await fetch(`/api/users/${id}`);
    const user = await res.json();
    dispatch(load(user))
}

export const updateUser = (wallet, id) => async dispatch => {
    const res = await fetch(`/api/users/${id}`, {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            wallet,
        }),
    })

    const data = res.json()
    if (res.ok) dispatch(update(data))
    return true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
            if (state) {
                state = null
            }
            const all = {
                ...state
            }
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
