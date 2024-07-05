import Image from "next/image";
import styles from "./GpsTrackerCover.module.css";

export const GpsTrackerCover = (props: {}) => {
  return (
    <section className={styles.section}>
      <Image
        alt="GPS Tracker"
        fill
        src="/assets/images/products/gps-tracker/gps-tracker-cover.png"
        style={{
          objectFit: "contain",
        }}
      />
    </section>
  );
};
