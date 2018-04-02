import { USER_SIGNUP } from '../constants/constant';

const initialState = {
    userSignupDetails: []
};

export default function (state=initialState,action){
    switch(action.type){
        case USER_SIGNUP:
        return {
            ...state,
            userSignupDetails: action.data
        }
        default:
        return state;
    }
};
