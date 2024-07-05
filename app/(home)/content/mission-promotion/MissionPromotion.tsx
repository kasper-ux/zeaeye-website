import { Button, Card, Logo } from "@ui";
import styles from "./MissionPromotion.module.css";
import Image from "next/image";

export const MissionPromotion = (props: {}) => {
  return (
    <section className={styles.section}>
      <Card>
        <div className={styles.content}>
          <Logo size={6} />
          <h1 className={styles.title}>
            Vi er et dansk trackingfirma, der samler alt det maritime for at
            gøre din oplevelse på vandet endnu bedre.
          </h1>
          <div className={styles.buttons}>
            <Button href="/produkter/gps-tracker" type="text">
              Vores mission
            </Button>
          </div>
        </div>
        <Image
          alt="Onboard App"
          fill
          className={styles.image}
          src="/assets/images/products/gps-tracker/gps-tracker-signal.png"
        />
      </Card>
    </section>
  );
};
