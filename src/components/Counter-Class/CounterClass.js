import React, { Component } from 'react';
import './CounterClass.css'

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount,
        };
    }

    render() {
        return (
            <div className="counterClass">
                <button
                    className="counterClass__button"
                    onClick={() => this.changeCount(1)}
                >
                    +
                </button>
                <span className="counterClass__number">{this.state.count}</span>
                <button
                    className="counterClass__button"
                    onClick={() => this.changeCount(-1)}
                >
                    -
                </button>
                <div>Counter Class Above</div>
            </div>
        );
    }

    changeCount(amount) {
        this.setState((prevState) => {
            return {
                count: prevState.count + amount,
            };
        });
    }
}
