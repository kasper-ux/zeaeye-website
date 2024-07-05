import Image from "next/image";
import styles from "./PartnersPromotion.module.css";

const partners = [
  {
    logo: "ds",
    width: 140,
  },
  {
    logo: "dkf",
    width: 190,
  },
  { logo: "dffr", width: 210 },
  { logo: "sodk", width: 200 },
  { logo: "topdk", width: 180 },
];

export const PartnersPromotion = (props: {}) => {
  return (
    <section className={styles.section}>
      <Image
        width={50}
        height={50}
        alt="Partners"
        src="/assets/icons/partners.svg"
        style={{ objectFit: "contain" }}
      />
      <h1>
        Vi samarbejder med <br />
        de største maritime partnere
      </h1>
      <div className={styles.content}>
        {partners.map((partner) => (
          <Image
            key={`logo-${partner.logo}`}
            width={partner.width}
            height={65}
            alt={partner.logo}
            style={{ objectFit: "contain", objectPosition: "center" }}
            src={`/assets/logos/${partner.logo}-light.png`}
          />
        ))}
      </div>
    </section>
  );
};
