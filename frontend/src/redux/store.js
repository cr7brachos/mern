import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { counterReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";


// το argument action, παίρνει τιμές από το store.discpatch


const reducer = combineReducers({
    cart: counterReducer
})

const middleware  = [thunk];
const store = createStore(reducer, {cart:{value:0}}, 
                composeWithDevTools(applyMiddleware(...middleware)));


//console.log(store.getState());

export default store;