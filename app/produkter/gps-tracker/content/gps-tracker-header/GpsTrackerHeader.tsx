import { Button } from "@ui";
import styles from "./GpsTrackerHeader.module.css";

export const GpsTrackerHeader = (props: {}) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span>GPS Tracker</span>
        <div className={styles.row}>
          <span>995,00 kr.</span>
          <Button size="small" type="text">
            Bestil
          </Button>
        </div>
      </div>
    </header>
  );
};
