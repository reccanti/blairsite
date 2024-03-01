import {
  GlobalStyleRule,
  ComplexStyleRule,
  globalStyle,
  style,
  StyleRule,
  CSSProperties,
} from "@vanilla-extract/css";
import {} from "@vanilla-extract/private";
import { simpleClass, lightClass, darkClass } from "../base.css";
import { themeRootClass } from "../../components/ThemeProvider/ThemeProvider.css";

export function globalLightModeStyles(
  className: string,
  rules: GlobalStyleRule
) {
  const baseMediaQuery = `(prefers-color-scheme: light)`;
  const baseSelector = `.${themeRootClass}.${lightClass}`;

  globalStyle(`${baseSelector} ${className}`, {
    ...rules,
  });

  // prefix all our media queries with the baseMediaQuery.
  //
  // Not sure if this will work for comma-separated media queries. It may
  // require a separate function if it turns out to be more complicated than
  // this
  // ~Blair 3/1/2024
  const { "@media": media = {}, ...remainingRules } = rules;
  const annotatedQueries: Record<string, CSSProperties> = {};
  for (let [k, v] of Object.entries(media)) {
    annotatedQueries[`${baseMediaQuery} and ${k}`] = v;
  }
  globalStyle(":root", {
    "@media": {
      ...annotatedQueries,
    },
  });
}

export function globalDarkModeStyles(
  className: string,
  rules: GlobalStyleRule
) {
  const baseMediaQuery = `(prefers-color-scheme: dark)`;
  const baseSelector = `.${themeRootClass}.${darkClass}`;
  const oppositeSelector = `.${themeRootClass}:not(.${lightClass})`;

  globalStyle(`${baseSelector} ${className}`, {
    ...rules,
  });

  // prefix all our media queries with the baseMediaQuery.
  //
  // Not sure if this will work for comma-separated media queries. It may
  // require a separate function if it turns out to be more complicated than
  // this
  // ~Blair 3/1/2024
  const { "@media": media = {}, ...remainingRules } = rules;
  const annotatedQueries: Record<string, CSSProperties> = {};
  for (let [k, v] of Object.entries(media)) {
    annotatedQueries[`${baseMediaQuery} and ${k}`] = v;
  }
  globalStyle(`${oppositeSelector} ${className}`, {
    "@media": {
      [baseMediaQuery]: {
        ...remainingRules,
      },
      ...annotatedQueries,
    },
  });
}

export function globalSimpleModeStyles(
  className: string,
  rules: GlobalStyleRule
) {
  const baseSelector = `.${themeRootClass}.${simpleClass}`;
  globalStyle(`${baseSelector} ${className}`, {
    ...rules,
  });
}
