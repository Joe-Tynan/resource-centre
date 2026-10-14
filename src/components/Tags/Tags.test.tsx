import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tags } from "./Tags";

describe("Tags", () => {
  it("renders all supplied tags", () => {
    render(<Tags tags={["Sleep", "Health", "Wellbeing"]} />);

    expect(screen.getByText("Sleep")).toBeTruthy();
    expect(screen.getByText("Health")).toBeTruthy();
    expect(screen.getByText("Wellbeing")).toBeTruthy();
  });

  it("renders nothing when the tags array is empty", () => {
    const { container } = render(<Tags tags={[]} />);

    expect(container.querySelectorAll("span")).toHaveLength(0);
  });
});
