import { ComponentProps } from "react";
import cx from "classnames";
import ToggleLeftIcon from "../Icons/ToggleLeftIcon";
import ToggleRightIcon from "../Icons/ToggleRightIcon";
import { toggle, toggleLabel } from "./Toggle.css";

interface Props extends ComponentProps<"span"> {
  enabled: boolean;
}
export function Toggle({ enabled, className, ...spanProps }: Props) {
  const ToggleIcon = enabled ? ToggleLeftIcon : ToggleRightIcon;
  const classNames = cx(className, toggle);
  const label = enabled ? "enabled" : "disabled";
  return (
    <span {...spanProps} className={classNames}>
      <ToggleIcon width={20} height={20} />
      <span className={toggleLabel}>{label}</span>
    </span>
  );
}
