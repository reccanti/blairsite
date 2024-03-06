import {
  Component,
  ComponentElement,
  ComponentType,
  ReactComponentElement,
  ReactNode,
  SVGProps,
} from "react";
import cx from "classnames";
import { Button, Props as ButtonProps } from "@/components/Button";
import {
  toggleButtonLabel,
  toggleButton,
  normalButton,
  closeButton,
} from "./ToggleButton.css";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";

type DropdownMenuToggleButtonProps = ButtonProps & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
};

const ICON_SIZE = 20;

export function DropdownMenuToggleButton({
  className,
  label,
  icon: Icon,
  ...props
}: DropdownMenuToggleButtonProps) {
  const newClasses = cx(className, toggleButton);
  return (
    <Button {...props} className={newClasses} hasPadding={false}>
      <span className={toggleButtonLabel}>{label}</span>
      <span className={normalButton}>
        <Icon width={ICON_SIZE} height={ICON_SIZE} />
      </span>
      <span className={closeButton}>
        <ChevronDownIcon width={ICON_SIZE} height={ICON_SIZE} />
      </span>
    </Button>
  );
}
