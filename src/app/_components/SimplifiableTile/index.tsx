import { ReactNode } from "react";
import { Props as TileProps } from "@/components/Tile";
import cx from "classnames";
import { simplifiableTile } from "./SimplifiableTile.css";

export function SimplifiableTile({
  children,
  color,
  fullWidth = false,
  renderAs: Element = "div",
  className = "",
}: TileProps) {
  const hasPadding = !fullWidth;
  const classNames = cx(simplifiableTile({ hasPadding, color }), className);
  return <Element className={classNames}>{children}</Element>;
}
