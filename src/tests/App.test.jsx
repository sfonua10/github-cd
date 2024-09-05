import { render } from "@testing-library/react";
import App from "../App";
import { it, expect } from "vitest";

it("renders with the h1 content as Deploy to Render", () => {
  render(<App />);

  const h1 = document.querySelector("h1");
  expect(h1.textContent).toBe("Vite + React");
});
