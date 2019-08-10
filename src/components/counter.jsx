import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
    }

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    };

    render() {
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {/* <span style={{ fontSize: 15 }} className="badge badge-primary m-2">{this.formatCounter()}</span> */}
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm">Incrememnt</button>
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