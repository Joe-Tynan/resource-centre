import { Fragment } from "react/jsx-runtime";

import type { TResource } from "../../types/global-types";
import { filterResources, groupResources } from "../../utils/resources-utils";

import styles from "./ResourceList.module.css";
import { ResourceCard } from "../ResourceCard/ResourceCard";
import { useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";

type TResourceListProps = {
  resources: TResource[];
};

export const ResourceList: React.FC<TResourceListProps> = ({ resources }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = filterResources(resources, searchTerm);
  const groupedResources = groupResources(filteredResources);

  return (
    <>
      <div className={styles.filterWrapper}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Take the object and convert it into an array of key-value pairs */}
      {Object.entries(groupedResources).map(([category, categoryResources]) => (
        <Fragment key={category}>
          <h2>{category}</h2>
          <ul className={styles.list}>
            {categoryResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </ul>
        </Fragment>
      ))}
    </>
  );
};
