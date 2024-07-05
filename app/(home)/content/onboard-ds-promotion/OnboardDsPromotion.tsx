import { Button, Card } from "@ui";
import styles from "./OnboardDsPromotion.module.css";
import Image from "next/image";

export const OnboardDsPromotion = (props: {}) => {
  return (
    <section className={styles.section}>
      <Card>
        <div className={styles.content}>
          <Image
            width={110}
            height={42}
            alt="Dansk Sejlunion"
            src="/assets/logos/ds.png"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
          <h1>
            Velkommen OMBORD <br />i din digitale sejlklub.
          </h1>
          <span className={styles.text}>
            Følg med i nyheder, opdag kommende begivenheder og book dit næste
            fartøj eller udstyr i sejlklubben, med den helt nye Onboard App, for
            alle klubbens medlemmer.
          </span>
          <div className={styles.buttons}>
            <Button href="/produkter/gps-tracker" type="text">
              Tilmeld klub
            </Button>
            <Button href="/produkter/gps-tracker">Læs mere</Button>
          </div>
        </div>
        <Image
          alt="Ombord"
          fill
          className={styles.image}
          src="/assets/images/products/onboard-app/onboard-app-hand.png"
        />
      </Card>
    </section>
  );
};
