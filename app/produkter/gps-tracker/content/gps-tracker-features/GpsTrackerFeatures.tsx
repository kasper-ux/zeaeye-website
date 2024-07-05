import { Card } from "@ui";
import styles from "./GpsTrackerFeatures.module.css";
import Image from "next/image";

export const GpsTrackerFeatures = (props: {}) => {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <Card>
          <div className={styles.image}>
            <Image
              fill
              alt="Battery"
              style={{ objectFit: "cover" }}
              src="/assets/images/products/gps-tracker/gps-tracker-feature-04.png"
            />
          </div>
          <div className={styles.content}>
            <h2>
              8.500 mAh batteri. <br />
              Over 5 års levetid.
            </h2>
          </div>
        </Card>
        <Card>
          <div className={styles.image}>
            <Image
              fill
              alt="Battery"
              style={{ objectFit: "cover" }}
              src="/assets/images/products/gps-tracker/gps-tracker-feature-05.png"
            />
          </div>
          <div className={styles.content}>
            <h2>
              IP67 klassificering. <br />
              Ekstremt vandtæt.
            </h2>
          </div>
        </Card>
        <Card>
          <div className={styles.image}>
            <Image
              fill
              alt="Battery"
              style={{ objectFit: "cover" }}
              src="/assets/images/products/gps-tracker/gps-tracker-feature-06.png"
            />
          </div>
          <div className={styles.content}>
            <h2>
              Nem montering med <br />
              skruer eller tape.
            </h2>
          </div>
        </Card>
      </div>
      <div className={styles.row}>
        <Card>
          <div className={styles.image}>
            <Image
              fill
              alt="Battery"
              style={{ objectFit: "cover" }}
              src="/assets/images/products/gps-tracker/gps-tracker-feature-07.png"
            />
          </div>
          <div className={styles.content}>
            <h2>
              Kompakt størrelse. <br />
              Lige til at skjule.
            </h2>
          </div>
        </Card>
        <Card>
          <div className={styles.image}>
            <Image
              fill
              alt="Battery"
              style={{ objectFit: "cover" }}
              src="/assets/images/products/gps-tracker/gps-tracker-feature-08.png"
            />
          </div>
          <div className={styles.content}>
            <h2>
              Intelligent tracking <br />
              med GeoFence.
            </h2>
          </div>
        </Card>
        <Card>
          <div className={styles.image}>
            <Image
              fill
              alt="Battery"
              style={{ objectFit: "cover" }}
              src="/assets/images/products/gps-tracker/gps-tracker-feature-09.png"
            />
          </div>
          <div className={styles.content}>
            <h2>
              Hold styr på dine <br />
              fartøjer i appen.
            </h2>
          </div>
        </Card>
      </div>
    </section>
  );
};
