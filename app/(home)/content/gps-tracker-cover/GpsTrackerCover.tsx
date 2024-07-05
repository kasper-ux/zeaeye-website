import Image from "next/image";
import styles from "./GpsTrackerCover.module.css";
import { Button, Logo } from "@ui";

export const GpsTrackerCover = (props: {}) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Logo />
        <h1>
          Simpel GPS Tracker. <br />
          Uendelige muligheder.
        </h1>
        <span>Nu kun 995,00 kr. + Abonnement 49,00 kr. /md</span>
        <div className={styles.buttons}>
          <Button href="/produkter/gps-tracker" type="primary">
            Udforsk
          </Button>
          <Button type="card">Bestil</Button>
        </div>
      </div>
      <div className={styles.content}>
        <Image
          width={320}
          height={290}
          style={{ objectFit: "contain" }}
          src="/assets/images/products/gps-tracker/gps-tracker-perspective.png"
          alt="GPS Tracker"
        />
      </div>
    </section>
  );
};
