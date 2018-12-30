import React, { Component } from "react";
import "./Body.scss";

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <button className="minus" onClick={() => this.props.onSymbolClick("-")}>
          -
        </button>
        <button className="plus" onClick={() => this.props.onSymbolClick("+")}>
          +
        </button>
        {new Array(10).fill().map((_, index) => (
          <button
            className={`number-${index}`}
            key={index}
            onClick={() => this.props.onNumberClick(index)}
          >
            {index}
          </button>
        ))}
        <button className="equal" onClick={this.props.onEqualClick}>
          =
        </button>
      </div>
    );
  }
}
