import { ReactNode, JSX } from "react";
import { dropdown, item } from "./DropdownMenu.css";
import { menu } from "./DropdownMenu.css";

interface MenuListItemProps {
  children: ReactNode;
}

export function Item({ children }: MenuListItemProps) {
  return <li className={item}>{children}</li>;
}

export function Menu({
  renderAs: Element = "nav",
  children,
}: {
  renderAs?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}) {
  return (
    <Element>
      <ul className={menu}>{children}</ul>
    </Element>
  );
}

interface DropdownMenuProps {
  toggleButton: ReactNode;
  children?: ReactNode;
}

export function DropdownMenu({ children, toggleButton }: DropdownMenuProps) {
  return (
    <div className={dropdown}>
      <div>{toggleButton}</div>
      {children}
    </div>
  );
}
