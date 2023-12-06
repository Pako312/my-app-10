import { ADD_CASH, GET_CASH, CLEAR_CASH } from "./types"

const initialState = {
    cash: 0,

}
export const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + action.payload
            }
        case GET_CASH:
            return {
                ...state,
                cash: state.cash - action.payload
            }
        case CLEAR_CASH:
            return {
                ...state,
                cash: state.cash - state.cash
            }

        default:
            return state;
    }

}