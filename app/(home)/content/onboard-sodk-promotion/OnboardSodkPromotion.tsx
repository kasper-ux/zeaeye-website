import { Button, Card } from "@ui";
import styles from "./OnboardSodkPromotion.module.css";
import Image from "next/image";

export const OnboardSodkPromotion = (props: {}) => {
  return (
    <section className={styles.section}>
      <Card>
        <div className={styles.content}>
          <Image
            width={160}
            height={50}
            alt="Dansk Sejlunion"
            src="/assets/logos/sodk.png"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
          <h1>
            Få rabat som kunde hos <br />
            Søassurancen Danmark
          </h1>
          <span className={styles.text}>
            Er du forsikringskunde hos Søassurancen Danmark, eller overvejer du
            at blive det? Så kan du få rabat på din nye Zeaeye GPS Tracker. Tag
            fat i Søassurancen for at høre mere.
          </span>
          <Button href="/produkter/gps-tracker" type="text">
            Læs mere
          </Button>
        </div>
        <Image
          alt="Ombord"
          fill
          className={styles.image}
          src="/assets/images/products/gps-tracker/gps-tracker-promotion.png"
        />
      </Card>
    </section>
  );
};
