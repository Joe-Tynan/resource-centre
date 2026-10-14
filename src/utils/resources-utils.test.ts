import { describe, expect, it } from "vitest";
import { groupResources } from "./resources-utils";
import type { TResource } from "../types/global-types";

describe("groupResources", () => {
  it("groups resources by category", () => {
    const resources: TResource[] = [
      {
        id: "1",
        category: "Articles",
        title: "Article one",
        thumbnail: "/article-one.jpg",
        tags: ["testing"],
        duration: 5,
        description: "First article",
        date_uploaded: "2026-10-01",
      },
      {
        id: "2",
        category: "Podcasts",
        title: "Podcast one",
        thumbnail: "/podcast-one.jpg",
        tags: ["audio"],
        duration: 30,
        description: "First podcast",
        date_uploaded: "2026-10-02",
      },
      {
        id: "3",
        category: "Articles",
        title: "Article two",
        thumbnail: "/article-two.jpg",
        tags: ["development"],
        duration: 10,
        description: "Second article",
        date_uploaded: "2026-10-03",
      },
    ];

    expect(groupResources(resources)).toEqual({
      Articles: [resources[0], resources[2]],
      Podcasts: [resources[1]],
    });
  });
});
