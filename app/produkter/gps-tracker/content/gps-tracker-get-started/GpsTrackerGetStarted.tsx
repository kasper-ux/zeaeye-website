import { Card } from "@ui";
import styles from "./GpsTrackerGetStarted.module.css";
import Image from "next/image";

export const GpsTrackerGetStarted = (props: {}) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>Så nemt er det</h1>
        <div className={styles.row}>
          <Card>
            <div className={styles.featureImage}>
              <Image
                fill
                alt="tracking"
                style={{ objectFit: "contain", objectPosition: "top" }}
                src="/assets/images/products/gps-tracker/gps-tracker-feature-11.png"
              />
            </div>
            <div className={styles.featureTitle}>
              <h2>
                Bestil din <br />
                GPS Tracker
              </h2>
            </div>
          </Card>
          <Card>
            <div className={styles.featureImage}>
              <Image
                fill
                alt="tracking"
                style={{ objectFit: "contain", objectPosition: "top" }}
                src="/assets/images/products/gps-tracker/gps-tracker-feature-10.png"
              />
            </div>
            <div className={styles.featureTitle}>
              <h2>
                Aktiver med <br />
                Onboard appen
              </h2>
            </div>
          </Card>
          <Card>
            <div className={styles.featureImage}>
              <Image
                fill
                alt="tracking"
                style={{ objectFit: "contain", objectPosition: "top" }}
                src="/assets/images/products/gps-tracker/gps-tracker-feature-06.png"
              />
            </div>
            <div className={styles.featureTitle}>
              <h2>
                Monter med <br />
                tape eller skruer
              </h2>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
