import type { TGroupedResources, TResource } from "../types/global-types";

// Take the array of resources and build an object that groups them by their category.
export const groupResources = (resources: TResource[]): TGroupedResources => {
  const groupedResources: TGroupedResources = {};

  for (let i = 0; i < resources.length; i++) {
    const resource = resources[i];
    const category = resource.category;

    // If the property doesn't exist yet then create it and give it an empty array.
    if (!groupedResources[category]) {
      groupedResources[category] = [];
    }

    // Push the resource into the array that corresponds to it's category.
    groupedResources[category].push(resource);
  }

  return groupedResources;
};

export const filterResources = (
  resources: TResource[],
  searchTerm: string,
): TResource[] => {
  const search = searchTerm.trim().toLowerCase();

  // Return all resources if search is empty
  if (!search) {
    return resources;
  }

  // If it's not empty filter the resources for any where the title or tag includes the search term
  return resources.filter((resource) => {
    const titleMatches = resource.title.toLowerCase().includes(search);
    const tagMatches = resource.tags.some((tag) =>
      tag.toLowerCase().includes(search),
    );

    return titleMatches || tagMatches;
  });
};
