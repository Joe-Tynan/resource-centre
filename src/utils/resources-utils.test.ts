import { describe, expect, it } from "vitest";
import { groupResources } from "./resources-utils";

describe("groupResources", () => {
  it("groups resources by category", () => {
    const resources = [
      {
        id: "1",
        category: "Articles",
        title: "Article one",
      },
      {
        id: "2",
        category: "Podcasts",
        title: "Podcast one",
      },
      {
        id: "3",
        category: "Articles",
        title: "Article two",
      },
    ];

    expect(groupResources(resources)).toEqual({
      Articles: [resources[0], resources[2]],
      Videos: [resources[1]],
    });
  });
});
