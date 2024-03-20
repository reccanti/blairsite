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
            onClick={toggleLightMode}
          >
            <Toggle enabled={lightMode}>Light Mode</Toggle>
          </Button>
        </Item>
        <Item>
          <Button className={itemButton} color="Gray2" onClick={toggleDarkMode}>
            <Toggle enabled={darkMode}>Dark Mode</Toggle>
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Magenta"
            onClick={toggleHighContrastMode}
          >
            <Toggle enabled={highContrastMode}>High Contrast</Toggle>
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Yellow"
            onClick={toggleSimpleLayoutMode}
          >
            <Toggle enabled={simpleLayoutMode}>Simple Layout and Fonts</Toggle>
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Green"
            onClick={toggleReducedMotionMode}
          >
            <Toggle enabled={reducedMotionMode}>Reduced Motion </Toggle>
          </Button>
        </Item>
        <Item>
          <Button
            className={itemButton}
            color="Blue"
            onClick={toggleWithMotionMode}
          >
            <Toggle enabled={withMotionMode}>With Motion</Toggle>
          </Button>
        </Item>
      </Menu>
    </DropdownMenu>
  );
}
