import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { counterReducer } from "./reducers/cartReducer";
import { userRegisterLoginReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";


// το argument action, παίρνει τιμές από το store.discpatch


const reducer = combineReducers({
    cart: counterReducer,
    userRegisterLogin: userRegisterLoginReducer
})

const userInfoInLocalStorage = localStorage.getItem("userInfo") 
? JSON.parse(localStorage.getItem("userInfo")) 
: sessionStorage.getItem("userInfo")
? JSON.parse(sessionStorage.getItem("userInfo"))
: {}

const INITIAL_STATE = {
    cart: {
        value: 0
    },
    userRegisterLogin: {
        userInfo: userInfoInLocalStorage
    }
}

const middleware  = [thunk];
const store = createStore(reducer, INITIAL_STATE, 
                composeWithDevTools(applyMiddleware(...middleware)));


//console.log(store.getState());

export default store;