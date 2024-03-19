"use client";
import { Button } from "@/components/Button";
import { DropdownMenu, Menu, Item } from "./DropdownMenu";
import { DropdownMenuToggleButton } from "./ToggleButton";
import { itemButton } from "./DropdownMenu.css";
import { useTheme } from "@/components/ThemeProvider";
import CogIcon from "@/components/Icons/CogIcon";

export function SettingsDropdown() {
  const {
    toggleDarkMode,
    toggleLightMode,
    toggleHighContrastMode,
    toggleReducedMotionMode,
    toggleSimpleLayoutMode,
    toggleWithMotionMode,
  } = useTheme();

  return (
    <DropdownMenu
      toggleButton={
        <DropdownMenuToggleButton
          color="Inverted"
          label="Settings"
          icon={CogIcon}
        />
      }
    >
      <Menu>
        <Item>
          <Button
            className={itemButton}
            color="Gray1"
            onClick={() => {
              console.log("clicking...");
              toggleLightMode();
            }}
          >
            Light Mode
          </Button>
        </Item>
        <Item>
          <Button className={itemButton} color="Gray2" onClick={toggleDarkMode}>
            Dark Mode
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Magenta"
            onClick={toggleHighContrastMode}
          >
            High Contrast
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Yellow"
            onClick={toggleSimpleLayoutMode}
          >
            Simple Layout and Fonts
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Green"
            onClick={toggleReducedMotionMode}
          >
            Reduced Motion
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Red"
            onClick={toggleWithMotionMode}
          >
            With Motion
          </Button>
        </Item>
      </Menu>
    </DropdownMenu>
  );
}
