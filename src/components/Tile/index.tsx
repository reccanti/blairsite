import { ReactNode, JSX } from "react";
import cx from "classnames";
import { tile } from "./Tile.css";
import { backgroundDefaultColors } from "../../themes/sprinkles/colors.css";
import { semanticColorKeymap } from "../../themes/sprinkles/colors.css";

export interface Props {
  children: ReactNode;
  color?: keyof typeof semanticColorKeymap;
  fullWidth?: boolean;
  renderAs?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function Tile({
  children,
  color,
  fullWidth = false,
  renderAs: Element = "div",
  className = "",
}: Props) {
  const hasPadding = !fullWidth;
  const classNames = cx(tile({ hasPadding, color }), className);
  return <Element className={classNames}>{children}</Element>;
}
