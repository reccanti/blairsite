import { ReactNode } from "react";
import cx from "classnames";
import { tile } from "./Tile.css";
import { backgroundDefaultColors } from "../../themes/sprinkles/colors.css";

export function Tile({
  children,
  color,
  fullWidth = false,
  className = "",
}: {
  children: ReactNode;
  color?: keyof typeof backgroundDefaultColors;
  fullWidth?: boolean;
  className?: string;
}) {
  const hasPadding = !fullWidth;
  const classNames = cx(tile({ hasPadding, color }), className);
  return <div className={classNames}>{children}</div>;
}
