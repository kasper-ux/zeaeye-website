import { ReactNode } from "react";
import styles from "./Card.module.css";
import { config } from "@constants";

const DEFAULT_PADDING = 0;
const DEFAULT_HEIGHT = 0;

export const Card = (props: {
  children?: ReactNode;
  padding?: number;
  height?: number;
}) => {
  const padding = (props.padding ?? DEFAULT_PADDING) * config.scale;
  const height = props.height ? props.height * config.scale : "auto";
  const style = { padding, height };
  return (
    <div className={styles.card} style={style}>
      {props.children}
    </div>
  );
};
