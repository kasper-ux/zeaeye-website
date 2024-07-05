import Image from "next/image";
import styles from "./Footer.module.css";
import { Spacer } from "../spacer/Spacer";
import Link from "next/link";
import footerLinks from "./footer-links";

export const Footer = (props: {}) => {
  const FooterLinks = () =>
    footerLinks.map((fl, key) => (
      <div key={`footer-links-${key}`} className={styles.column}>
        <h3 className={styles.heading}>{fl.title}</h3>
        <Spacer height={1} />
        {fl.links.map((link, linkKey) => (
          <Link href={link.href} key={`footer-links-${key}-link-${linkKey}`}>
            <span className={styles.link}>{link.label}</span>
          </Link>
        ))}
      </div>
    ));

  return (
    <footer className={styles.footer}>
      <div className={styles.image}>
        <Image
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
          }}
          fill
          alt="Zeaeye"
          src="/assets/images/common/footer.png"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <FooterLinks />
          </div>
          <Spacer height={5} />
          <div className={styles.links}>
            <span className={styles.text}>© 2024 Zeaeye ApS</span>
            <div className={styles.row}>
              <Link href="/">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
            <div className={styles.row}>
              <Link href="/">
                <Image
                  src="/assets/logos/appstore-light.png"
                  alt="AppStore"
                  width={80}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/logos/playstore-light.png"
                  alt="PlayStore"
                  width={98}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
