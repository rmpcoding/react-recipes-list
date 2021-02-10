import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount,
        };
    }

    render() {
        return (
            <div className="counter">
                <button
                    className="counter__button"
                    onClick={() => this.changeCount(-1)}
                >
                    -
                </button>
                <span className="counter__number">{this.state.count}</span>
                <button
                    className="counter__button"
                    onClick={() => this.changeCount(1)}
                >
                    +
                </button>
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
