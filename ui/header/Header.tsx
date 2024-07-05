"use client";

import { Logo, Navlink, Spacer } from "@ui";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import headerLinks from "./header-links";

export const Header = () => {
  const pathname = usePathname();

  const Navlinks = () =>
    headerLinks.map((link) => (
      <Navlink active={pathname == link.href} key={link.id} href={link.href}>
        {link.label}
      </Navlink>
    ));

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerSectionLeft}>
          <Link href="/">
            <Logo />
          </Link>
          <Spacer width={2} />
          <Navlinks />
        </div>
        <div className={styles.headerSectionRight}>
          <Navlink active={pathname == "profile"} href="/profile">
            Min profil
          </Navlink>
          <div className={styles.headerLine} />
          <Navlink href="/">
            <Image
              style={{
                objectFit: "contain",
                objectPosition: "left",
              }}
              alt="da"
              width={24}
              height={16}
              src="/assets/flags/en.svg"
            />
            English
          </Navlink>
        </div>
      </div>
    </header>
  );
};
