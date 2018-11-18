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
  }

  onSymbolClick(symbol) {
    this.setState({ symbol });
  }

  onNumberClick(number) {
    if (this.state.symbol === "") {
      if (this.state.firstTerm === "0") {
        this.setState({ firstTerm: number });
      } else {
        this.setState({ firstTerm: this.state.firstTerm + number });
      }
    } else {
      this.setState({ secondTerm: this.state.secondTerm + number });
    }
  }

  onEqualClick() {
    if (this.state.symbol == "+") {
      this.setState({
        firstTerm: String(
          parseInt(this.state.firstTerm) + parseInt(this.state.secondTerm)
        ),
        secondTerm: ""
      });
    } else if (this.state.symbol == "-") {
      this.setState({
        firstTerm: String(
          parseInt(this.state.firstTerm) - parseInt(this.state.secondTerm)
        ),
        secondTerm: ""
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header result={this.state.firstTerm} />
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
