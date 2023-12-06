import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashActionsCreator, getCashActionsCreator, clearDataCashe } from '../../redux/cash/actions'

const Balance = () => {
    const cashState = useSelector((state) => state.cashReducer.cash)
    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch(
            clearDataCashe()
        )
    }
    return (
        <div>
            balance - {cashState}
            <button onClick={() => dispatch(addCashActionsCreator(Number(prompt())))}>add</button>
            <button onClick={() => dispatch(getCashActionsCreator(Number(prompt())))}>take</button>
            <button onClick={handleClear}>clear</button>
        </div>
    );
}

export default Balance;