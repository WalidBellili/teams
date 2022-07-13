import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="flex">
        <button onClick={this.props.substract}>-</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
