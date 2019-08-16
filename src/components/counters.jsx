import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    console.log('Counters - Rendered');

    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary">Reset</button>
        {counters.map(counter => (
          <Counter 
            key={counter.id} 
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
