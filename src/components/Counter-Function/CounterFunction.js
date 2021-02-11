import React, { useState } from 'react';
import './styles.css';

export default function CounterFunction({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    return (
        <>
            <div className="counterFunction">
                <button
                    className="counterFunction__button"
                    onClick={() => setCount((prevState) => prevState + 1)}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    className="counterFunction__button"
                    onClick={() => setCount((prevState) => prevState - 1)}
                >
                    -
                </button>
                <div>Function Class Above</div>
            </div>
        </>
    );
}
