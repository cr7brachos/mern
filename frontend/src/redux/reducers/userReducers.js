import { LOGIN_USER } from "../constants/userConstants";

export const userRegisterLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userinfo: action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}