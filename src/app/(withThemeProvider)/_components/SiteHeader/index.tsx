import { Tile } from "@/components/Tile";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import {
  header,
  headerLink,
  menus,
  overlay,
  overlayWrapper,
  siteHeader,
} from "./SiteHeader.css";
// import { SettingsDropdown } from "./DropdownMenu/SettingsDropdown";
import { NavDropdown } from "./DropdownMenu/NavDropdown";

export function SiteHeader() {
  return (
    <div className={overlayWrapper}>
      <Tile className={siteHeader} renderAs="header" fullWidth color="Inverted">
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
          {/**
           * Commenting out the Settings Menu for now since toggling
           * settings in this client-only app can cause flashing lights.
           *  Might re-enable this if I'm able to set this up on a
           *  server and can render the classes on the page with SSR
           *
           * ~Blair, March 20, 2024
           */}
          {/* <SettingsDropdown /> */}
          <NavDropdown />
        </div>
      </Tile>
      <div className={overlay}></div>
    </div>
  );
}
