import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SortDropdown } from "./SortDropdown";

describe("SortSelect", () => {
  it("renders an accessible sort select", () => {
    render(<SortDropdown sortBy="default" setSortBy={() => {}} />);

    expect(
      screen.getByRole("combobox", {
        name: /sort/i,
      }),
    ).toBeTruthy();
  });
});
