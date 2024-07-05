import { Card } from "@ui";
import styles from "./GpsTrackerMap.module.css";

export const GpsTrackerMap = (props: {}) => {
  return (
    <section>
      <Card>
        <div className={styles.content}>
          <h1>
            Den <i>ultimative</i> <br />
            følgesvend til dine <br />
            maritime eventyr.
          </h1>
          <div className={styles.dot} />
        </div>
      </Card>
    </section>
  );
};
