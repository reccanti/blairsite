import { Button } from "@/components/Button";
import { DropdownMenu, Menu, Item } from "./DropdownMenu";
import { DropdownMenuToggleButton } from "./ToggleButton";
import MenuIcon from "@/components/Icons/MenuIcon";
import { itemButton } from "./DropdownMenu.css";

export function NavDropdown() {
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
          <Button className={itemButton} href="/#about" color="Red">
            Who&#39;s This Gal?
          </Button>
        </Item>
        <Item>
          <Button className={itemButton} href="/#projects" color="Yellow">
            Cool Stuff I&#39;ve Worked On
          </Button>
        </Item>
        <Item>
          <Button className={itemButton} href="/#skills" color="Green">
            Things I&#39;ve Used
          </Button>
        </Item>
        <Item>
          <Button className={itemButton} href="/#contact" color="Blue">
            Wanna Reach Out?
          </Button>
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
