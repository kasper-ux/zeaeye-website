import { ReactNode } from "react";
import styles from "./Page.module.css";

const DEFAULT_THEME = "light";

export const Page = (props: {
  children?: ReactNode;
  theme?: "dark" | "light";
}) => {
  const theme = props.theme ?? DEFAULT_THEME;

  return (
    <main aria-details={theme} className={styles.page}>
      <div className={styles.content}>{props.children}</div>
    </main>
  );
};
