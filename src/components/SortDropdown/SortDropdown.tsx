import type { TSortOption } from "../../types/global-types";

import styles from "./SortDropdown.module.css";

type TSortDropdownProps = {
  sortBy: TSortOption;
  setSortBy: (value: TSortOption) => void;
};

export const SortDropdown: React.FC<TSortDropdownProps> = ({
  sortBy,
  setSortBy,
}) => {
  return (
    <div className={styles.sortWrapper}>
      <label htmlFor="resource-sort">Sort Resources:</label>
      <select
        className={styles.sortInput}
        id="resource-sort"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value as TSortOption)}
      >
        <option value="default">Default (grouped by category)</option>
        <option value="category">Category (A-Z)</option>
        <option value="date">Date uploaded (newest first)</option>
      </select>
    </div>
  );
};
