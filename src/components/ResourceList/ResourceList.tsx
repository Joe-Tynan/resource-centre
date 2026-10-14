import { Fragment } from "react/jsx-runtime";

import type { TResource, TSortOption } from "../../types/global-types";
import {
  filterResources,
  groupResources,
  sortResources,
} from "../../utils/resources-utils";

import styles from "./ResourceList.module.css";
import { ResourceCard } from "../ResourceCard/ResourceCard";
import { useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { SortDropdown } from "../SortDropdown/SortDropdown";

type TResourceListProps = {
  resources: TResource[];
};

export const ResourceList: React.FC<TResourceListProps> = ({ resources }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<TSortOption>("default");

  const filteredResources = filterResources(resources, searchTerm);
  const groupedResources = groupResources(filteredResources);
  const sortedResources =
    sortBy === "default" ? [] : sortResources(filteredResources, sortBy);

  return (
    <>
      <div className={styles.filterWrapper}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Take the object and convert it into an array of key-value pairs */}
      {filteredResources.length === 0 ? (
        <p>No resources found.</p>
      ) : sortBy === "default" ? (
        Object.entries(groupedResources).map(
          ([category, categoryResources]) => (
            <Fragment key={category}>
              <h2>{category}</h2>
              <ul className={styles.list}>
                {categoryResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </ul>
            </Fragment>
          ),
        )
      ) : (
        <ul className={styles.list}>
          {sortedResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </ul>
      )}
    </>
  );
};
