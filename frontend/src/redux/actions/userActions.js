import { LOGIN_USER } from "../constants/userConstants";


/* 
create an action named: setReduxUserState
the action takes argumement the userCreated and calls another function which 
takes an argument as dispatch from the Redux library
finally return to the payload the userCreated value
*/
export const setReduxUserState = (userCreated) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: userCreated
    })
};