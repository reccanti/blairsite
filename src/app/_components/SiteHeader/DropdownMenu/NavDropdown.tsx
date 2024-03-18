import cx from "classnames";
import { Button } from "@/components/Button";
import { DropdownMenu, Menu, Item } from "./DropdownMenu";
import { DropdownMenuToggleButton } from "./ToggleButton";
import MenuIcon from "@/components/Icons/MenuIcon";
import { button } from "@/components/Button/Button.css";
import { itemButton } from "./DropdownMenu.css";
import { semanticColorKeymap } from "@/themes/sprinkles/colors.css";

export function NavDropdown() {
  const colorButton = (color: keyof typeof semanticColorKeymap) =>
    cx(itemButton, button({ color, hasPadding: true }));

  return (
    <DropdownMenu
      toggleButton={
        <DropdownMenuToggleButton
          color="Inverted"
          label="Navigation"
          icon={MenuIcon}
        />
      }
    >
      <Menu>
        <Item>
          <a className={colorButton("Red")} href="/#about" tabIndex={0}>
            Who&#39;s This Gal?
          </a>
        </Item>
        <Item>
          <a className={colorButton("Yellow")} href="/#projects" tabIndex={0}>
            Cool Stuff I&#39;ve Worked On
          </a>
        </Item>
        <Item>
          <a className={colorButton("Green")} href="/#skills" tabIndex={0}>
            Things I&#39;ve Used
          </a>
        </Item>
        <Item>
          <a className={colorButton("Blue")} href="/#contact" tabIndex={0}>
            Wanna Reach Out?
          </a>
        </Item>
        <Item>
          <Button className={itemButton} href="/resume" color="Magenta">
            Check out my Resume
          </Button>
        </Item>
      </Menu>
    </DropdownMenu>
  );
}
