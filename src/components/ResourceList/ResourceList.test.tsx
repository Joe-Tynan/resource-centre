import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { mockResources } from "../../data/data";
import { ResourceList } from "./ResourceList";
import { MemoryRouter } from "react-router";

afterEach(() => cleanup());

describe("ResourceList", () => {
  it("renders resource titles", () => {
    render(
      <MemoryRouter>
        <ResourceList resources={mockResources} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Mindful Moments")).toBeTruthy();

    expect(screen.getByText("The Science of Sleep")).toBeTruthy();
  });

  it("renders category headings", () => {
    render(
      <MemoryRouter>
        <ResourceList resources={mockResources} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Podcasts" })).toBeTruthy();

    expect(screen.getByRole("heading", { name: "Articles" })).toBeTruthy();
  });

  it("handles an empty resource list", () => {
    render(
      <MemoryRouter>
        <ResourceList resources={[]} />
      </MemoryRouter>,
    );

    expect(screen.queryByRole("link")).toBeNull();
  });
});
