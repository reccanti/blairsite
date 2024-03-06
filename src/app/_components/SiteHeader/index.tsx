import { Tile } from "@/components/Tile";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import {
  header,
  headerLink,
  menuToggleButton,
  menus,
  siteHeader,
  menuButton,
  menuWrapper,
  menuListItem,
  menuToggleButtonWrapper,
} from "./SiteHeader.css";
import { SettingsDropdown } from "./DropdownMenu/SettingsDropdown";
import { NavDropdown } from "./DropdownMenu/NavDropdown";
// import SettingsIcon from "@/components/Icons/SettingsIcon";
// import HamburgerIcon from "@/components/Icons/HamburgerIcon";
// import CloseIcon from "@/components/Icons/CloseIcon";

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
      <div className={menus}>
        <SettingsDropdown />
        <NavDropdown />
      </div>
    </Tile>
  );
}
