import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("renders balance card", () => {
  render(<App />);
  expect(screen.getByText(/Current Balance/i)).toBeInTheDocument();
});

test("adds a deposit transaction", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/Amount/i), {
    target: { value: "100" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/deposit of \$100.00/i)).toBeInTheDocument();
});
