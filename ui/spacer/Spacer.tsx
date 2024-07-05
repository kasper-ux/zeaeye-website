import { config } from "@constants";
import styles from "./Spacer.module.css";

const DEFAULT_WIDTH = 0;
const DEFAULT_HEIGHT = 0;

export const Spacer = (props: { width?: number; height?: number }) => {
  const width = (props.width ?? DEFAULT_WIDTH) * config.scale;
  const height = (props.height ?? DEFAULT_HEIGHT) * config.scale;
  return <div style={{ width, height }} className={styles.spacer} />;
};
