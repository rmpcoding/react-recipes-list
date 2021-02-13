import React, { Component } from 'react';
import { ThemeContext } from '../../App';
import './CounterClass.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount,
        };
    }

    render() {
        console.log('Render Counter');
        return (
            <ThemeContext.Consumer>
                {(style) => (
                    <div className="counterClass">
                        <button
                            style={style}
                            className="counterClass__button"
                            onClick={() => this.changeCount(1)}
                        >
                            +
                        </button>
                        <span className="counterClass__number">
                            {this.state.count}
                        </span>
                        <button
                            style={style}
                            className="counterClass__button"
                            onClick={() => this.changeCount(-1)}
                        >
                            -
                        </button>
                        <div>Counter Class Above</div>
                    </div>
                )}
            </ThemeContext.Consumer>
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
