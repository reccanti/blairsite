import { labelDefaultColors } from "@/themes/sprinkles/colors.css";
import { BaseIcon } from "./BaseIcon";
import settingsIcon from "../../../public/assets/icons/Settings.svg";

export function Settings({
  color = "labelDefault",
}: {
  color: keyof typeof labelDefaultColors;
}) {
  return <BaseIcon src={settingsIcon.src} color={color} />;
}
