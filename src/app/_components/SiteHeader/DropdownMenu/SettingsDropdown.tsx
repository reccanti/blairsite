"use client";
import { Button } from "@/components/Button";
import { DropdownMenu, Menu, Item } from "./DropdownMenu";
import { DropdownMenuToggleButton } from "./ToggleButton";
import { itemButton } from "./DropdownMenu.css";
import { useTheme } from "@/components/ThemeProvider";
import CogIcon from "@/components/Icons/CogIcon";
import { Toggle } from "@/components/Toggle";

export function SettingsDropdown() {
  const {
    toggleDarkMode,
    toggleLightMode,
    toggleHighContrastMode,
    toggleReducedMotionMode,
    toggleSimpleLayoutMode,
    toggleWithMotionMode,
    darkMode,
    lightMode,
    highContrastMode,
    reducedMotionMode,
    simpleLayoutMode,
    withMotionMode,
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
            Light Mode <Toggle enabled={lightMode} />
          </Button>
        </Item>
        <Item>
          <Button className={itemButton} color="Gray2" onClick={toggleDarkMode}>
            Dark Mode <Toggle enabled={darkMode} />
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Magenta"
            onClick={toggleHighContrastMode}
          >
            High Contrast <Toggle enabled={highContrastMode} />
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
            Reduced Motion <Toggle enabled={reducedMotionMode} />
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Red"
            onClick={toggleWithMotionMode}
          >
            With Motion <Toggle enabled={withMotionMode} />
          </Button>
        </Item>
      </Menu>
    </DropdownMenu>
  );
}
