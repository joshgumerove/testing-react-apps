import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you; if the button was not clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button is clicked", () => {
    // arrange
    render(<Greeting />);
    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if button is clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const previousOutput = screen.queryByText("good to see you!", {
      exact: false,
    });

    expect(previousOutput).toBeNull();
  });
});

// note the tree A's:
// 1. arrange --> setup the test data - test conditions and test environment
// 2. Run logic that should be tested (e.g. execute function)
// 3. assert

// expect() function is globally available (as is the test() function)

// note how we want to test all possible scenarios when writing tests
