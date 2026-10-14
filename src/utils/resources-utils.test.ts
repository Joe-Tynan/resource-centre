import { describe, expect, it } from "vitest";
import { filterResources, groupResources } from "./resources-utils";
import type { TResource } from "../types/global-types";

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

describe("groupResources", () => {
  it("groups resources by category", () => {
    const result = groupResources(resources);

    expect(result.Articles).toEqual([resources[0], resources[2]]);
    expect(result.Podcasts).toEqual([resources[1]]);
  });

  it("groups multiple resources into the same category", () => {
    const result = groupResources(resources);

    expect(result.Articles).toHaveLength(2);
  });

  it("preserves the original resource objects", () => {
    const result = groupResources(resources);

    expect(result.Articles?.[0]).toBe(resources[0]);
    expect(result.Podcasts?.[0]).toBe(resources[1]);
  });

  it("returns an empty object when given no resources", () => {
    expect(groupResources([])).toEqual({});
  });
});

describe("filterResources", () => {
  it("filters resources by title", () => {
    const result = filterResources(resources, "two");

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("3");
  });

  it("filters resources by tag", () => {
    const result = filterResources(resources, "dev");

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("3");
  });

  it("matches regardless of letter casing", () => {
    const result = filterResources(resources, "AUDIO");

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("2");
  });

  it("returns all resources when the search is empty", () => {
    expect(filterResources(resources, "")).toEqual(resources);
  });

  it("returns no resources when nothing matches", () => {
    expect(filterResources(resources, "gardening")).toEqual([]);
  });
});
