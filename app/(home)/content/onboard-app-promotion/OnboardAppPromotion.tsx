import { Button, Card, Spacer } from "@ui";
import styles from "./OnboardAppPromotion.module.css";
import Image from "next/image";

export const OnboardAppPromotion = (props: {}) => {
  return (
    <section className={styles.section}>
      <Card>
        <div className={styles.content}>
          <Image
            width={130}
            height={42}
            alt="Onboard"
            src="/assets/logos/onboard.png"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
          <h1>
            Hop ombord I Danmarks <br />
            nye maritime app.
          </h1>
          <Spacer height={1} />
          <span className={styles.text}>
            Med Onboard appen har du altid adgang til klubaktiviteter, de nyeste
            maritime nyheder og alle dine beviser
          </span>
          <div className={styles.buttons}>
            <Button href="/produkter/gps-tracker" type="text">
              <Image
                className={styles.appLogo}
                alt="App Store"
                width={80}
                height={26}
                src="/assets/logos/appstore-light.png"
              />
            </Button>
            <Button href="/produkter/gps-tracker" type="text">
              <Image
                className={styles.appLogo}
                alt="Play Store"
                width={95}
                height={26}
                src="/assets/logos/playstore-light.png"
              />
            </Button>
          </div>
        </div>
        <Image
          alt="Onboard App"
          fill
          className={styles.image}
          src="/assets/images/products/onboard-app/onboard-app-promotion.png"
        />
      </Card>
    </section>
  );
};
