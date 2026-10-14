import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { mockResources } from "../../data/data";
import { SingleResourcePage } from "./SingleResourcePage";

afterEach(() => cleanup());

describe("SingleResourcePage", () => {
  it("renders the selected resource details", () => {
    const resource = mockResources[0];

    render(
      <MemoryRouter initialEntries={[`/resource/${resource.id}`]}>
        <Routes>
          <Route
            path="/resource/:resourceId"
            element={<SingleResourcePage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: resource.title })).toBeTruthy();

    expect(screen.getByText(resource.description)).toBeTruthy();
    expect(screen.getByText(resource.category)).toBeTruthy();
    expect(screen.getByText(`${resource.duration} mins`)).toBeTruthy();
    expect(screen.getByText(resource.date_uploaded)).toBeTruthy();
  });

  it("renders the resource tags", () => {
    const resource = mockResources[0];

    render(
      <MemoryRouter initialEntries={[`/resource/${resource.id}`]}>
        <Routes>
          <Route
            path="/resource/:resourceId"
            element={<SingleResourcePage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    resource.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeTruthy();
    });
  });

  it("renders a not found message for an invalid resource ID", () => {
    render(
      <MemoryRouter initialEntries={["/resource/invalid-id"]}>
        <Routes>
          <Route
            path="/resource/:resourceId"
            element={<SingleResourcePage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Resource not found" }),
    ).toBeTruthy();
  });
});
