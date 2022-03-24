import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransacion() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount
        }

        addTransactions(newTransaction);
    }

    return (
        <div>
            <h3>Add a new transacion</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    > Amount <br />
                        (negative - expenses, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..."></input>
                </div>
                <button className="btn">Add transacion</button>
            </form>
        </div>
    );
}

export default AddTransacion