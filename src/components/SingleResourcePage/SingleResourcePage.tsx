import { useParams } from "react-router";

import { mockResources } from "../../data/data";

import styles from "./SingleResourcePage.module.css";
import { Tags } from "../Tags/Tags";

export const SingleResourcePage = () => {
  let { resourceId } = useParams();

  const resource = mockResources.find((resource) => resource.id === resourceId);

  if (!resource) {
    return <h1>Resource not found</h1>;
  }

  return (
    <>
      <img
        className={styles.image}
        src={resource.thumbnail}
        alt={`${resource.title} banner image`}
      />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>{resource.title}</h1>
            <p className={styles.description}>{resource.description}</p>
            <Tags tags={resource.tags} />
          </div>
          <aside className={styles.aside}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Category:</strong> {resource.category}
              </li>
              <li className={styles.listItem}>
                <strong>Read/Watch Time:</strong> {resource.duration} mins
              </li>
              <li className={styles.listItem}>
                <strong>Date Uploaded:</strong> {resource.date_uploaded}
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};
