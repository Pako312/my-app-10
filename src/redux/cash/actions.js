import { ADD_CASH, GET_CASH, CLEAR_CASH } from "./types"


export const addCashActionsCreator = (cash) => {
    return {
        type: ADD_CASH,
        payload: cash
    }
}



export const getCashActionsCreator = (cash) => ({
    type: GET_CASH,
    payload: cash
})

export const clearDataCashe = (cash) => {
    return {
        type: CLEAR_CASH,
        payload: cash

    }

}