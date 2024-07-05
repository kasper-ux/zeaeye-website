import Link from "next/link";
import styles from "./Navlink.module.css";
import { ReactNode } from "react";

export const Navlink = (props: {
  href: string;
  active?: boolean;
  children?: ReactNode;
}) => {
  return (
    <Link
      aria-selected={props.active}
      href={props.href}
      className={styles.navlink}
    >
      {props.children}
    </Link>
  );
};
