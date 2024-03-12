import { ReactNode, ComponentProps } from "react";
import Image, { ImageProps } from "next/image";
import { SimplifiableTile } from "../SimplifiableTile";
import {
  image,
  imageImg,
  item,
  label as labelStyle,
  list,
} from "./GridList.css";
import cx from "classnames";
import { desktopSize } from "@/themes/utlities/breakpoints.css";

interface ItemImageProps extends ImageProps {}

export function ItemImage(props: ItemImageProps) {
  const tileClassName = cx(image);
  const imgClassName = cx(props.className, imageImg);
  return (
    <SimplifiableTile className={tileClassName}>
      <Image
        {...props}
        className={imgClassName}
        fill
        sizes={`
                (min-width: ${desktopSize}) 400px,
                50vw`}
      />
    </SimplifiableTile>
  );
}

interface ItemLabelProps {
  label: string;
  color: ComponentProps<typeof SimplifiableTile>["color"];
}

export function ItemLabel({ label, color }: ItemLabelProps) {
  return (
    <SimplifiableTile renderAs="span" className={labelStyle} color={color}>
      {label}
    </SimplifiableTile>
  );
}

interface ItemProps {
  children: ReactNode;
}

export function Item({ children }: ItemProps) {
  return <li className={item}>{children}</li>;
}

interface ListProps {
  children?: ReactNode;
  className?: string;
}
export function List({ children, className }: ListProps) {
  const classNames = cx(list, className);
  return <ul className={classNames}>{children}</ul>;
}
