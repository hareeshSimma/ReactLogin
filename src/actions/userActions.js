import { ALL_USERS_URL, ALL_USERS } from '../constants/constant';
import axios from 'axios';

export const allUsersDetails = () => (dispatch) => {
    axios.get(ALL_USERS_URL)
    .then(res => {
        console.log(res)
        if(res.data.data){
            dispatch({
                type: ALL_USERS,
                users: res.data.data
            });
        }
    });
};