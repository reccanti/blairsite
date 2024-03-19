import { ComponentProps } from "react";
import cx from "classnames";
import ToggleLeftIcon from "../Icons/ToggleLeftIcon";
import ToggleRightIcon from "../Icons/ToggleRightIcon";
import { toggle } from "./Toggle.css";

interface Props extends ComponentProps<"span"> {
  active: boolean;
}
export function Toggle({ active, className, ...spanProps }: Props) {
  const ToggleIcon = active ? ToggleLeftIcon : ToggleRightIcon;
  const classNames = cx(className, toggle);
  return (
    <span {...spanProps} className={classNames}>
      <ToggleIcon width={20} height={20} />
    </span>
  );
}
