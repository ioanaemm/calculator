import React, { Component } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstTerm: "0",
      symbol: "",
      secondTerm: "0"
    };

    this.onSymbolClick = this.onSymbolClick.bind(this);
    this.onNumberClick = this.onNumberClick.bind(this);
    this.onEqualClick = this.onEqualClick.bind(this);
    this.displayNumbers = this.displayNumbers.bind(this);
  }

  onSymbolClick(symbol) {
    this.setState({ symbol });
  }

  onNumberClick(number) {
    if (this.state.symbol === "") {
      if (this.state.firstTerm === "0") {
        this.setState({ firstTerm: String(number) });
      } else {
        this.setState({ firstTerm: this.state.firstTerm + String(number) });
      }
    } else {
      if (this.state.secondTerm === "0") {
        this.setState({ secondTerm: String(number) });
      } else {
        this.setState({ secondTerm: this.state.secondTerm + String(number) });
      }
    }
  }

  onEqualClick() {
    if (this.state.symbol === "+") {
      this.setState({
        firstTerm: String(
          parseInt(this.state.firstTerm) + parseInt(this.state.secondTerm)
        ),
        secondTerm: "0",
        symbol: ""
      });
    } else if (this.state.symbol === "-") {
      this.setState({
        firstTerm: String(
          parseInt(this.state.firstTerm) - parseInt(this.state.secondTerm)
        ),
        secondTerm: "0",
        symbol: ""
      });
    }
  }

  displayNumbers() {
    if (this.state.symbol === "") {
      return this.state.firstTerm;
    } else {
      return this.state.secondTerm;
    }
  }

  render() {
    return (
      <div className="App">
        <Header result={this.displayNumbers()} />
        <Body
          onSymbolClick={this.onSymbolClick}
          onNumberClick={this.onNumberClick}
          onEqualClick={this.onEqualClick}
        />
      </div>
    );
  }
}

export default App;
