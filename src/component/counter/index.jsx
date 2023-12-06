import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounterActionCreator, incrementCounterActionCreator, clearCounterActionCreator } from '../../redux/counter/actions';


const CounterApp = () => {
    const dispatch = useDispatch()
    const stateCounter = useSelector(state => state.counterReducer.counter)
    const cashState = useSelector((state) => state.cashReducer.cash);
    const clearData = useSelector((state) => state.cashReducer.cash);

    const handleIncrementCounter = () => {
        dispatch(incrementCounterActionCreator())
    }
    const handleDecrementCounter = () => {
        dispatch(
            decrementCounterActionCreator()
        )
    }

    const ClearCounter = () => {
        dispatch(
            clearCounterActionCreator()
        )
    }
    return (
        <div>

            <p>With usestate</p>
            <button onClick={handleIncrementCounter}>
                +
            </button>
            {stateCounter}
            <button onClick={handleDecrementCounter}>
                -
            </button>
            <button onClick={ClearCounter}>
                clear
            </button>
            <p>--------------------</p>
            balance from balance component = {cashState}
            <p>With React Redux</p>

        </div>
    )
}

export default CounterApp;