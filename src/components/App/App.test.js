import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Renderer from "react-test-renderer";

jest.mock("../Header/Header", () => "Header");
jest.mock("../Body/Body", () => "Body");

describe("App component", () => {
  it("renders without crashing", () => {
    const component = Renderer.create(<App />);
    expect(component).toBeDefined();
  });

  it("renders correctly", () => {
    const component = Renderer.create(<App />);
    expect(component).toMatchSnapshot();
  });

  it("sets the symbol", () => {
    const component = Renderer.create(<App />);
    const instance = component.getInstance();
    instance.onSymbolClick("foo");
    expect(instance.state.symbol).toEqual("foo");
  });

  it("handles number when the first term is 0 and when no symbol", () => {
    const component = Renderer.create(<App />);
    const instance = component.getInstance();
    instance.state = {
      symbol: "",
      firstTerm: "0"
    };
    instance.onNumberClick("3");
    expect(instance.state.firstTerm).toEqual("3");
  });

  it("handles number when the first term is not 0 and no symbol", () => {
    const component = Renderer.create(<App />);
    const instance = component.getInstance();
    instance.state = {
      symbol: "",
      firstTerm: "69"
    };
    instance.onNumberClick("6");
    expect(instance.state.firstTerm).toEqual("696");
  });

  it("handles number when the second term is 0 and a symbol", () => {
    // setup
    const component = Renderer.create(<App />);
    const instance = component.getInstance();

    // setting the stage
    instance.state = {
      symbol: "+",
      firstTerm: "345",
      secondTerm: "0"
    };

    // mocks
    const mockSetState = jest.fn();
    instance.setState = mockSetState;

    // code to be tested
    instance.onNumberClick("5");

    // assertions
    expect(mockSetState.mock.calls.length).toEqual(1);
    expect(mockSetState).toBeCalledWith({ secondTerm: "5" });
  });

  it("handles number when there is a symbol", () => {
    const component = Renderer.create(<App />);
    const instance = component.getInstance();
    instance.state = {
      symbol: "+",
      secondTerm: "7"
    };
    instance.onNumberClick("9");
    expect(instance.state.secondTerm).toEqual("79");
  });

  it("handles addition", () => {
    //setup
    const component = Renderer.create(<App />);
    const instance = component.getInstance();

    //setting the stage
    instance.state = {
      symbol: "+",
      firstTerm: "23",
      secondTerm: "56"
    };

    //mocks
    const mockSetState = jest.fn();
    instance.setState = mockSetState;

    //code to be tested
    instance.onEqualClick();

    //assertions
    expect(mockSetState.mock.calls.length).toEqual(1);
    expect(mockSetState).toBeCalledWith({
      symbol: "",
      firstTerm: "79",
      secondTerm: "0"
    });
  });

  it("handles substraction", () => {
    //setup
    const component = Renderer.create(<App />);
    const instance = component.getInstance();

    //setting the stage
    instance.state = {
      symbol: "-",
      firstTerm: "30",
      secondTerm: "23"
    };

    //mocks
    const mockSetState = jest.fn();
    instance.setState = mockSetState;

    //code to be tested
    instance.onEqualClick();

    //assertions
    expect(mockSetState.mock.calls.length).toEqual(1);
    expect(mockSetState).toBeCalledWith({
      symbol: "",
      firstTerm: "7",
      secondTerm: "0"
    });
  });
});
