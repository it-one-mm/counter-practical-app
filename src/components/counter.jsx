import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: []
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        );
    }

    render() {
        return (
            <React.Fragment>
                <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm">Incrememnt</button>
                {this.renderTags()}
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