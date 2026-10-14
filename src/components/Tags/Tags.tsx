import styles from "./Tags.module.css";

type TTagsProps = {
  tags: string[];
};

export const Tags: React.FC<TTagsProps> = ({ tags }) => {
  return (
    <div className={styles.tagWrapper}>
      {tags.map((tag, index) => (
        <span className={styles.tag} key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
};
