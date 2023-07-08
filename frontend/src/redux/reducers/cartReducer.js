import * as actionTypes from "../constants/cartConstant";

export const counterReducer = (state={value: 0}, action) =>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return { value: state.value + 1 + action.someValue}
            break;
    
        default:
            return state;
            break;
    }
}