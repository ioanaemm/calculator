import React, { Component } from "react";
import "./Body.scss";

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <button onClick={() => this.props.onSymbolClick("-")}>-</button>
        <button onClick={() => this.props.onSymbolClick("+")}>+</button>
        {new Array(10).fill().map((_, index) => (
          <button key={index} onClick={() => this.props.onNumberClick(index)}>
            {index}
          </button>
        ))}
        <button onClick={this.props.onEqualClick}>=</button>
      </div>
    );
  }
}
