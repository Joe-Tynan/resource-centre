import type { TResource } from "../../types/global-types";
import { Tags } from "../Tags/Tags";

import styles from "./ResourceCard.module.css";

type TResourceCardProps = {
  resource: TResource;
};

export const ResourceCard: React.FC<TResourceCardProps> = ({ resource }) => {
  return (
    <li key={resource.id}>
      <a className={styles.link} href="#">
        <article className={styles.article}>
          <img
            className={styles.thumbnail}
            src={resource.thumbnail}
            alt={`${resource.title} thumbnail image`}
          />
          <div className={styles.contentWrapper}>
            <div className={styles.heading}>
              <h3 className={styles.title}>{resource.title}</h3>
              <p className={styles.duration}>{resource.duration} mins</p>
            </div>
            <div className={styles.tagWrapper}>
              <Tags tags={resource.tags.slice(0, 3)} />
            </div>
            <p className={styles.readMoreLink}>Read more</p>
          </div>
        </article>
      </a>
    </li>
  );
};
