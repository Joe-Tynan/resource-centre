import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ResourcesPage } from "./ResourcesPage";

afterEach(() => cleanup());

describe("ResourcesPage", () => {
  it("renders the page heading", () => {
    render(
      <MemoryRouter>
        <ResourcesPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Resource Centre" }),
    ).toBeTruthy();
  });

  it("renders the resources list", () => {
    render(
      <MemoryRouter>
        <ResourcesPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Mindful Moments" }),
    ).toBeTruthy();

    expect(
      screen.getByRole("heading", { name: "The Science of Sleep" }),
    ).toBeTruthy();
  });
});
