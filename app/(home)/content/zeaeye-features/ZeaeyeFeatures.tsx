import { Card } from "@ui";
import styles from "./ZeaeyeFeatures.module.css";
import Image from "next/image";

export const ZeaeyeFeatures = (props: {}) => {
  return (
    <section className={styles.section}>
      <Card>
        <div className={styles.image}>
          <Image
            fill
            alt="Onboard Admin"
            style={{ objectFit: "cover" }}
            src="/assets/images/products/onboard-admin/onboard-admin-device.png"
          />
        </div>
        <div className={styles.content}>
          <h2>Klubsystem</h2>
          <Image
            width={30}
            height={30}
            alt="Læs mere"
            src="/assets/icons/more.svg"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Card>
      <Card>
        <div className={styles.image}>
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt="SOS Tracker"
            src="/assets/images/products/sos-tracker/sos-tracker-device.png"
          />
        </div>
        <div className={styles.content}>
          <h2>SOS Tracker</h2>
          <Image
            width={30}
            height={30}
            alt="Læs mere"
            src="/assets/icons/more.svg"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Card>
      <Card>
        <div className={styles.image}>
          <Image
            fill
            alt="Onboard Admin"
            style={{ objectFit: "cover" }}
            src="/assets/images/products/onboard-admin/onboard-admin-device.png"
          />
        </div>
        <div className={styles.content}>
          <h2>Klubsystem</h2>
          <Image
            width={30}
            height={30}
            alt="Læs mere"
            src="/assets/icons/more.svg"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Card>
    </section>
  );
};
