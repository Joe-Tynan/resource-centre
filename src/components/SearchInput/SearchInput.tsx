import styles from "./SearchInput.module.css";

type TSearchInputProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export const SearchInput: React.FC<TSearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className={styles.searchWrapper}>
      <label htmlFor="resource-search">Search Resources:</label>
      <input
        className={styles.searchInput}
        id="resource-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by title or tag..."
      />
    </div>
  );
};
