import { ComponentProps } from "react";
import NextLink from "next/link";
import { button, colorVariants } from "./Button.css";

type ButtonProps = ComponentProps<"button">;
type NextLinkProps = ComponentProps<typeof NextLink>;

type Props = (ButtonProps | NextLinkProps) & {
  color?: keyof typeof colorVariants;
};

export function Button({ color = "Default", ...props }: Props) {
  const className = button({ color });
  const sharedProps = { ...props, className };

  if ("href" in sharedProps) {
    return <NextLink {...sharedProps} />;
  } else {
    return <button {...sharedProps} />;
  }
}
