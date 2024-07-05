import { config } from "@constants";
import Image from "next/image";

const DEFAULT_SIZE = 4.5;
const LOGO_RATIO = 5.3;

export const Logo = (props: { size?: number }) => {
  const size = (props.size ?? DEFAULT_SIZE) * config.scale;
  const height = size / LOGO_RATIO;
  const width = size;
  return <Image width={width} height={height} src="/logo.svg" alt="Zeaeye" />;
};
