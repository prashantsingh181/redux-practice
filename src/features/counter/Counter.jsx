import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    return (
        <div className="h-screen bg-green-200 text-green-900 flex flex-col items-center gap-4 py-10">
            <h1 className='font-bold text-xl'>Counter Component</h1>
            <div>{count}</div>
            <div className="flex gap-2">
                <button className="px-4 py-2 border border-green-700 rounded bg-green-500" onClick={() => dispatch(decrement())}>-</button>
                <button className="px-4 py-2 border border-green-700 rounded bg-green-500" onClick={() => dispatch(increment())}>+</button>
            </div>

            <input
                type="text"
                value={amount}
                className="border border-green-500 rounded px-4 py-2"
                onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex flex-row gap-4"><button className="px-4 py-2 border border-green-700 rounded bg-green-500" onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}>
                Add Amount
            </button>
                <button
                    className="px-4 py-2 border border-green-700 rounded bg-green-500"
                    onClick={() => {
                        setAmount(0);
                        dispatch(reset());
                    }}
                >
                    Reset
                </button></div>
        </div>
    )
}

export default Counter