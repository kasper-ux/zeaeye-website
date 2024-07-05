import { Card } from "@ui";
import styles from "./GpsTrackerFeatures.module.css";
import Image from "next/image";

const gpsTrackerFeatures = [
  {
    image: "/assets/images/products/gps-tracker/gps-tracker-feature-01.png",
    title: "Høj kvalitet. \nKompakt størrelse.",
  },
  {
    image: "/assets/images/products/gps-tracker/gps-tracker-feature-02.png",
    title: "5 års tracking. \nIngen opladning.",
  },
  {
    image: "/assets/images/products/gps-tracker/gps-tracker-feature-03.png",
    title: "Nøjagtig tracking. \nI hele verden.",
  },
];

export const GpsTrackerFeatures = (props: {}) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        {gpsTrackerFeatures.map((feature, key) => (
          <Card key={`feature-${key}`}>
            <div className={styles.featureImage}>
              <Image
                fill
                alt="tracking"
                style={{ objectFit: "contain", objectPosition: "top" }}
                src={feature.image}
              />
            </div>
            <div className={styles.featureTitle}>
              <h2>{feature.title}</h2>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
