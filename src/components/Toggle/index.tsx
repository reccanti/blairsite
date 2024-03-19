import { ComponentProps } from "react";
import cx from "classnames";
import ToggleLeftIcon from "../Icons/ToggleLeftIcon";
import ToggleRightIcon from "../Icons/ToggleRightIcon";
import { toggle, toggleLabel } from "./Toggle.css";

interface Props extends ComponentProps<"label"> {
  enabled: boolean;
}
export function Toggle({ enabled, className, children, ...spanProps }: Props) {
  const ToggleIcon = enabled ? ToggleRightIcon : ToggleLeftIcon;
  const classNames = cx(className, toggleLabel);

  return (
    <label {...spanProps} aria-checked={enabled} className={classNames}>
      {children}
      <ToggleIcon className={toggle({ enabled })} width={20} height={20} />
    </label>
  );
}
