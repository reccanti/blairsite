import { JSX, ComponentProps } from "react";
import {} from "../../themes/sprinkles/colors.css";
import { header } from "./Header.css";

type ValidHeaderElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Props = ComponentProps<ValidHeaderElements> & {
  renderAs: ValidHeaderElements;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Header({
  renderAs: Element,
  size: sizeProp,
  // highlight,
  ...props
}: Props) {
  const size = `header${sizeProp}Type` as const;
  return <Element className={header({ size })} {...props} />;
}
