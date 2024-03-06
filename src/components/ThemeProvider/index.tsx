"use client";

import {
  darkClass,
  highContrastClass,
  lightClass,
  reducedMotionClass,
  simpleClass,
} from "../../themes/base.css";
import { ReactNode, createContext, useContext, useState, useMemo } from "react";
import cx from "classnames";
import { themeRootClass } from "./ThemeProvider.css";

// Theme State - this is for internal use, to make sure certain themes don't
// conflict with each other (for example, we might have separate functions to
// toggle "light mode" and "dark mode", but they shouldn't be active at the same
// time)
type BrightnessThemes = "unset" | "light" | "dark";
type ContrastThemes = "unset" | "highContrast";
type StyledFontsThemes = "styled" | "simple";
type ReduceMotionThemes = "reduced" | "unset";

interface ThemeState {
  brightness: BrightnessThemes;
  contrast: ContrastThemes;
  styledLayout: StyledFontsThemes;
  reduceMotion: ReduceMotionThemes;
}

const defaultBrightness: ThemeState["brightness"] = "unset";
const defaultContrast: ThemeState["contrast"] = "unset";
const defaultStyledLayout: ThemeState["styledLayout"] = "styled";
const defaultReduceMotion: ThemeState["reduceMotion"] = "unset";

// Theme Context - this is the actual interface that will be defined for use
// within the application

interface ThemeContext {
  lightMode: boolean;
  darkMode: boolean;
  highContrastMode: boolean;
  simpleLayoutMode: boolean;
  reducedMotionMode: boolean;
  toggleLightMode: () => void;
  toggleDarkMode: () => void;
  toggleHighContrastMode: () => void;
  toggleSimpleLayoutMode: () => void;
  toggleReducedMotionMode: () => void;
}

/**
 * Ignoring this error because all of these values will be added by the
 * Provider, and an Error will be thrown if the user attempts to use the context
 * without a Provider
 */
// @ts-ignore
export const ThemeContext = createContext<ThemeContext>();

export const useTheme = function () {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error(
      "Component needs to be wrapped in a ThemeProvider in order to use the ThemeContext"
    );
  }
  return context;
};

interface Props extends Partial<ThemeState> {
  children: ReactNode;
}

export function ThemeProvider({
  children,
  brightness: initialBrightness = defaultBrightness,
  contrast: initialContrast = defaultContrast,
  styledLayout: initialStyledLayout = defaultStyledLayout,
  reduceMotion: initialReduceMotion = defaultReduceMotion,
}: Props) {
  const [brightness, setBrightness] = useState(initialBrightness);
  const [contrast, setContrast] = useState(initialContrast);
  const [styledLayout, setStyledLayout] = useState(initialStyledLayout);
  const [reduceMotion, setReducedMotion] = useState(initialReduceMotion);

  const lightMode = useMemo(() => brightness === "light", [brightness]);
  const darkMode = useMemo(() => brightness === "dark", [brightness]);
  const highContrastMode = useMemo(
    () => contrast === "highContrast",
    [contrast]
  );
  const simpleLayoutMode = styledLayout === "simple";
  const reducedMotionMode = reduceMotion === "reduced";

  const toggleLightMode = () => {
    // if light mode is enabled, unset the current mode and default to user
    // preferences. The user will need to explicitly toggle dark mode to enable
    // that
    if (lightMode) {
      setBrightness("unset");
    } else {
      setBrightness("light");
    }
  };

  const toggleDarkMode = () => {
    // if dark mode is enabled, unset the current mode and default to user
    // preferences. The user will need to explicitly toggle light mode to enable
    // that
    if (darkMode) {
      setBrightness("unset");
    } else {
      setBrightness("dark");
    }
  };

  const toggleHighContrastMode = () => {
    if (highContrastMode) {
      setContrast("unset");
    } else {
      setContrast("highContrast");
    }
  };

  const toggleSimpleLayoutMode = () => {
    if (simpleLayoutMode) {
      setStyledLayout("styled");
    } else {
      setStyledLayout("simple");
    }
  };

  const toggleReducedMotionMode = () => {
    if (reducedMotionMode) {
      setReducedMotion("unset");
    } else {
      setReducedMotion("reduced");
    }
  };

  return (
    <ControlledThemeProvider
      brightness={brightness}
      contrast={contrast}
      styledLayout={styledLayout}
      reduceMotion={reduceMotion}
      toggleLightMode={toggleLightMode}
      toggleDarkMode={toggleDarkMode}
      toggleHighContrastMode={toggleHighContrastMode}
      toggleSimpleLayoutMode={toggleSimpleLayoutMode}
      toggleReducedMotionMode={toggleReducedMotionMode}
    >
      {children}
    </ControlledThemeProvider>
  );
}

interface ControlledProps extends Props {
  toggleLightMode: () => void;
  toggleDarkMode: () => void;
  toggleHighContrastMode: () => void;
  toggleSimpleLayoutMode: () => void;
  toggleReducedMotionMode: () => void;
}

const noop = () => {};
export function ControlledThemeProvider({
  children,
  brightness,
  contrast,
  styledLayout,
  reduceMotion,
  toggleLightMode = noop,
  toggleDarkMode = noop,
  toggleHighContrastMode = noop,
  toggleSimpleLayoutMode = noop,
  toggleReducedMotionMode = noop,
}: Partial<ControlledProps>) {
  const lightMode = brightness === "light";
  const darkMode = brightness === "dark";
  const highContrastMode = contrast === "highContrast";
  const simpleLayoutMode = styledLayout === "simple";
  const reducedMotionMode = reduceMotion === "reduced";

  const classNames = cx({
    [lightClass]: lightMode,
    [darkClass]: darkMode,
    [highContrastClass]: highContrastMode,
    [simpleClass]: simpleLayoutMode,
    [reducedMotionClass]: reducedMotionMode,
    [themeRootClass]: true,
  });

  return (
    <ThemeContext.Provider
      value={{
        lightMode,
        darkMode,
        highContrastMode,
        simpleLayoutMode,
        reducedMotionMode,
        toggleLightMode,
        toggleDarkMode,
        toggleHighContrastMode,
        toggleSimpleLayoutMode,
        toggleReducedMotionMode,
      }}
    >
      <div className={classNames}>{children}</div>
    </ThemeContext.Provider>
  );
}
