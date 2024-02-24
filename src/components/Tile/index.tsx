import { ReactNode } from "react";
import { tile } from "./Tile.css";
import { backgroundDefaultColors } from "../../themes/sprinkles/colors.css";

export function Tile({
  children,
  color,
  fullWidth = false,
}: {
  children: ReactNode;
  color: keyof typeof backgroundDefaultColors;
  fullWidth?: boolean;
}) {
  const hasPadding = !fullWidth;
  return <div className={tile({ hasPadding, color })}>{children}</div>;
}
