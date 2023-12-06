import { INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_DATA } from "./types"


const incrementCounterActionCreator = () => ({
    type: INCREMENT_COUNTER

})
const decrementCounterActionCreator = () => ({
    type: DECREMENT_COUNTER
})

const clearCounterActionCreator = () => ({
    type: CLEAR_DATA
})

export {
    incrementCounterActionCreator,
    decrementCounterActionCreator,
    clearCounterActionCreator
}

