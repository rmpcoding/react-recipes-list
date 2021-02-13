import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import './styles.css';

export default function CounterFunction({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const style = useContext(ThemeContext)

    return (
        <>
            <div className="counterFunction">
                <button
                    style={style}
                    className="counterFunction__button"
                    onClick={() => setCount((prevState) => prevState + 1)}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    style={style}
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
