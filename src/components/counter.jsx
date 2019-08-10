import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
    }

    render() {
        return (
            <React.Fragment>
                <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm">Incrememnt</button>
            </React.Fragment>
        );
    }

    formatCounter = () => {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;