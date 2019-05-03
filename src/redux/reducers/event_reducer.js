//redux state
const initialState = {
    title: "",
    website_url: "",
    img: "",
    imgName: "",
    description: ""
};

//action types
const UPDATE_FIELD = 'UPDATE_FIELD';
const CLEAR_FIELDS = 'CLEAR_FIELDS';

//action creators or dispatchers
export function updateField(field, payload) {
    return {
        type: UPDATE_FIELD,
        payload: {
            field, 
            payload
        }
    }
}

export function clearFields() {
    return {
        type: CLEAR_FIELDS
    }
}

//reducer
export default function eventReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.field]: `${action.payload.payload}`
            }
        case CLEAR_FIELDS:
            return {
                ...initialState
            }
        default:
            return state
    }
}

