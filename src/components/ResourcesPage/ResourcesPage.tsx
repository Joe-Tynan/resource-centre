import { mockResources } from "../../data/data";
import { ResourceList } from "../ResourceList/ResourceList";

import styles from "./ResourcesPage.module.css";

export const ResourcesPage = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Resource Centre</h1>
        <ResourceList resources={mockResources} />
      </div>
    </section>
  );
};
