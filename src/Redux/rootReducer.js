import {combineReducers} from 'redux';
import userReducer from './reducer/userReducer';

// user: userReducer,


var rootReducer = combineReducers({
users: userReducer
})

export default rootReducer;