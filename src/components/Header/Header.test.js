import React from "react";
import TestRenderer from "react-test-renderer";
import Header from "./Header";

describe("Header component", () => {
  it("exists", () => {
    const component = TestRenderer.create(<Header />);
    expect(component).toBeDefined();
  });

  it("works if it has no props", () => {
    const component = TestRenderer.create(<Header />);
    expect(component).toBeDefined();
  });

  it("correctly renders the result", () => {
    let result = TestRenderer.create(<Header result="12" />);
    expect(result).toMatchSnapshot();
  });
});
