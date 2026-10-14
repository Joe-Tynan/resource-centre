import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { mockResources } from "../../data/data";
import { ResourceCard } from "./ResourceCard";

afterEach(() => cleanup());

describe("ResourceCard", () => {
  const resource = mockResources[0];

  it("renders the resource title and duration", () => {
    render(
      <MemoryRouter>
        <ul>
          <ResourceCard resource={resource} />
        </ul>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: resource.title })).toBeTruthy();

    expect(screen.getByText(`${resource.duration} mins`)).toBeTruthy();
  });

  it("renders the thumbnail with appropriate alt text", () => {
    render(
      <MemoryRouter>
        <ul>
          <ResourceCard resource={resource} />
        </ul>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("img", {
        name: `${resource.title} thumbnail image`,
      }),
    ).toBeTruthy();
  });

  it("links to the correct resource detail page", () => {
    render(
      <MemoryRouter>
        <ul>
          <ResourceCard resource={resource} />
        </ul>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /read more/i }).getAttribute("href"),
    ).toBe(`/resource/${resource.id}`);
  });

  it("renders no more than three tags", () => {
    render(
      <MemoryRouter>
        <ul>
          <ResourceCard
            resource={{
              ...resource,
              tags: ["Sleep", "Health", "Wellbeing", "Lifestyle"],
            }}
          />
        </ul>
      </MemoryRouter>,
    );

    expect(screen.getByText("Sleep")).toBeTruthy();
    expect(screen.getByText("Health")).toBeTruthy();
    expect(screen.getByText("Wellbeing")).toBeTruthy();
    expect(screen.queryByText("Lifestyle")).toBeNull();
  });
});
