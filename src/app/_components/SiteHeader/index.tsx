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
import SettingsIcon from "@/components/Icons/SettingsIcon";
import HamburgerIcon from "@/components/Icons/HamburgerIcon";
import CloseIcon from "@/components/Icons/CloseIcon";

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
        <div className={menuWrapper}>
          <div className={menuToggleButtonWrapper}>
            <Button
              className={menuToggleButton}
              color="Inverted"
              hasPadding={false}
              tabIndex={0}
            >
              Settings
              <SettingsIcon width={26} height={26} />
              <CloseIcon width={26} height={26} />
            </Button>
          </div>
          <nav>
            <ul>
              <li className={menuListItem}>
                <Button className={menuButton} color="Gray1">
                  Light/Dark?
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Inverted">
                  High-Contrast?
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Magenta">
                  Simplified Layout and Fonts?
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Yellow">
                  Reduced Motion?
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={menuWrapper}>
          <div className={menuToggleButtonWrapper}>
            <Button
              tabIndex={0}
              className={menuToggleButton}
              color="Inverted"
              hasPadding={false}
            >
              Navigate
              <HamburgerIcon width={26} height={26} />
              <CloseIcon width={26} height={26} />
            </Button>
          </div>
          <nav>
            <ul>
              <li className={menuListItem}>
                <Button className={menuButton} color="Red" tabIndex={0}>
                  Who&#39;s this gal?
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Yellow">
                  Cool Stuff I&#39;ve Worked On
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Green">
                  Things I&#39;ve Used
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Blue">
                  Wanna reach out?
                </Button>
              </li>
              <li className={menuListItem}>
                <Button className={menuButton} color="Magenta">
                  Check out my Resume
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Tile>
  );
}
