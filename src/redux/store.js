import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user_reducer';
import eventReducer from './reducers/event_reducer';

export default createStore(
    combineReducers({user: userReducer, event: eventReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);