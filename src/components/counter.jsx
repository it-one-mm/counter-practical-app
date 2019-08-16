import React, { Component } from "react";

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        // if(prevProps.conter.value != this.props.counter.value) {
        //     // Ajax call and get new data from the server
        // }
    }

  render() {
    console.log('Counter - Rendered');

    return (
      <div>
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Incrememnt
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  formatCounter = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
