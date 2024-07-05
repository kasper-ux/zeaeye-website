import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";
import Link from "next/link";

type ButtonType = "primary" | "card" | "text";

export const Button = (props: {
  children?: ReactNode;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  size?: "small" | "regular";
}) => {
  const className = props.size == "small" ? styles.buttonSmall : styles.button;
  if (props.href) {
    return (
      <Link aria-details={props.type} href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      aria-details={props.type}
      onClick={props.onClick}
      className={className}
    >
      {props.children}
    </button>
  );
};
