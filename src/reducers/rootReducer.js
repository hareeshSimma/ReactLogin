import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    signup:signupReducer,
    user:userReducer
   
});

export default rootReducer;