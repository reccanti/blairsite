import { ReactNode, JSX } from "react";
import cx from "classnames";
import { tile } from "./Tile.css";
import { backgroundDefaultColors } from "../../themes/sprinkles/colors.css";

export function Tile({
  children,
  color,
  fullWidth = false,
  renderAs: Element = "div",
  className = "",
}: {
  children: ReactNode;
  color?: keyof typeof backgroundDefaultColors;
  fullWidth?: boolean;
  renderAs?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const hasPadding = !fullWidth;
  const classNames = cx(tile({ hasPadding, color }), className);
  return <Element className={classNames}>{children}</Element>;
}
