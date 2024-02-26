import { ComponentProps } from "react";
import { labelHighlightColors } from "../../themes/sprinkles/colors.css";
import { highlight } from "./Highlight.css";

type Props = ComponentProps<"span"> & {
  color: keyof typeof labelHighlightColors;
};

export function Highlight({ color, ...props }: Props) {
  return <span className={highlight({ color })} {...props} />;
}
