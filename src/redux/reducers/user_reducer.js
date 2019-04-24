//redux state
const initialState = {
    user: {}
};

//action types
const LOGIN = 'LOGIN';

//action creators or dispatchers
export function login(userCredentials) {
    const action = {
        type: LOGIN,
        payload: userCredentials
    }
    return action;
}

//reducer
export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}

