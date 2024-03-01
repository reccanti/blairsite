import { Tile } from "@/components/Tile";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import {
  header,
  headerLink,
  menuButton,
  menuButtons,
  siteHeader,
} from "./SiteHeader.css";
import SettingsIcon from "@/components/Icons/SettingsIcon";
import HamburgerIcon from "@/components/Icons/HamburgerIcon";

// console.log(SettingsIcon);

export function SiteHeader() {
  return (
    <Tile
      className={siteHeader}
      renderAs="header"
      fullWidth
      color="backgroundInverted"
    >
      <Button
        hasPadding={false}
        className={headerLink}
        href="/"
        color="Inverted"
      >
        <h1 className={header}>
          Blair Makes{" "}
          <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
        </h1>
      </Button>
      <div className={menuButtons}>
        <Button className={menuButton} color="Inverted" hasPadding={false}>
          Settings
          <SettingsIcon width={26} height={26} />
        </Button>
        <Button className={menuButton} color="Inverted" hasPadding={false}>
          Navigate
          <HamburgerIcon width={26} height={26} />
        </Button>
      </div>
    </Tile>
  );
}
