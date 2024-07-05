import { Card } from "@ui";
import styles from "./GpsTrackerPromotion.module.css";
import Image from "next/image";

export const GpsTrackerPromotion = (props: {}) => {
  return (
    <section className={styles.section}>
      <Card>
        <div className={styles.content}>
          <Image
            alt="GPS Tracker"
            fill
            src="/assets/images/products/gps-tracker/gps-tracker-boat.png"
          />
          <div className={styles.overlay}>
            <h1>
              Danmarks{" "}
              <div className={styles.flag}>
                <Image
                  alt="Danmark"
                  width={40}
                  height={40}
                  src="/assets/flags/da.svg"
                />
              </div>
              bedste
              <br />
              maritime GPS tracker
            </h1>
          </div>
        </div>
      </Card>
    </section>
  );
};
