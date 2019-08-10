import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 1
    }

    render() {
        return (
            <React.Fragment>
                <span>{this.formatCounter()}</span>
                <button>Incrememnt</button>
            </React.Fragment>
        );
    }

    formatCounter = () => {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        // const x = <h1>Zero</h1>
        // return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;