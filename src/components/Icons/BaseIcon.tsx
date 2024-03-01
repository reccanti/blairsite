import { labelDefaultColors } from "@/themes/sprinkles/colors.css";
import { baseIconWrapper } from "./BaseIcon.css";

interface Props {
  src: string;
  color?: keyof typeof labelDefaultColors;
}

export function BaseIcon({ src, color = "labelDefault" }: Props) {
  return (
    <span className={baseIconWrapper}>
      <img src={src} />
    </span>
  );
}
