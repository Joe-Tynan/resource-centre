import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ResourcesPage } from "./ResourcesPage";

afterEach(() => cleanup());

describe("ResourcesPage", () => {
  it("renders the page heading", () => {
    render(<ResourcesPage />);

    expect(
      screen.getByRole("heading", { name: "Resource Centre" }),
    ).toBeTruthy();
  });

  it("renders the resources list", () => {
    render(<ResourcesPage />);

    expect(
      screen.getByRole("heading", { name: "Mindful Moments" }),
    ).toBeTruthy();

    expect(
      screen.getByRole("heading", { name: "The Science of Sleep" }),
    ).toBeTruthy();
  });
});
