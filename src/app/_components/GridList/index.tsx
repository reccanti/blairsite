import { ReactNode } from "react";

interface GridListItemProps {
  // not a fan of using "any" here, but this is the type returned by NextJS when
  // it imports an image, so I'm keeping it like this for now
  //
  // ~Blair, 3/7/2024
  img: any;
  label: string;
}

export function GridListItem({ img, label }: GridListItemProps) {
  return (
    <li>
      <span>{label}</span>
    </li>
  );
}

interface GridListProps {
  children?: ReactNode;
}
export function GridList({ children }: GridListProps) {
  return <ul>{children}</ul>;
}
