import * as actionTypes from "../constants/cartConstant";

export const addToCart = () => (dispatch) => {
    dispatch({
        type: actionTypes.ADD_TO_CART,
        someValue: 0
    })
}