import { ComponentProps } from "react";
import NextLink from "next/link";
import { button } from "./Button.css";
import cx from "classnames";
import { semanticColorKeymap } from "@/themes/sprinkles/colors.css";

type ButtonProps = ComponentProps<"button">;
type NextLinkProps = ComponentProps<typeof NextLink>;

export type Props = (ButtonProps | NextLinkProps) & {
  color?: keyof typeof semanticColorKeymap;
  hasPadding?: boolean;
};

export function Button({
  color,
  hasPadding = true,
  className = "",
  tabIndex = 0,
  ...props
}: Props) {
  const newClassNames = cx(className, button({ color, hasPadding }));
  const sharedProps = { ...props, tabIndex, className: newClassNames };

  if ("href" in sharedProps) {
    return <NextLink {...sharedProps} />;
  } else {
    return <button {...sharedProps} />;
  }
}
