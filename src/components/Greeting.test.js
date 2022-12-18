import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});

// note the tree A's:
// 1. arrange --> setup the test data - test conditions and test environment
// 2. Run logic that should be tested (e.g. execute function)
// 3. assert

// expect() function is globally available (as is the test() function)
