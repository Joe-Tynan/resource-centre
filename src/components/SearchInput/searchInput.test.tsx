
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("renders an accessible search input", () => {
    render(
      <SearchInput
        searchTerm=""
        setSearchTerm={() => {}}
      />,
    );

    expect(
      screen.getByRole("searchbox", {
        name: /search resources/i,
      }),
    ).toBeTruthy();
  });
});
