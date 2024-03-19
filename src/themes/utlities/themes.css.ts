import {
  GlobalStyleRule,
  ComplexStyleRule,
  globalStyle,
  style,
  StyleRule,
  CSSProperties,
} from "@vanilla-extract/css";
import {} from "@vanilla-extract/private";
import {
  simpleClass,
  lightClass,
  darkClass,
  reducedMotionClass,
  withMotionClass,
} from "../base.css";
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

export function globalStyledModeStyles(
  className: string,
  rules: GlobalStyleRule
) {
  const baseSelector = `.${themeRootClass}:not(.${simpleClass})`;
  globalStyle(`${baseSelector} ${className}`, {
    ...rules,
  });
}

export function globalReducedMotionStyles(
  className: string,
  rules: GlobalStyleRule
) {
  const baseMediaQuery = `prefers-reduced-motion`;
  const baseSelector = `.${themeRootClass}.${reducedMotionClass}`;
  const oppositeSelector = `.${themeRootClass}:not(.${withMotionClass})`;

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

export function globalWithMotionStyles(
  className: string,
  rules: GlobalStyleRule
) {
  const baseMediaQuery = `(prefers-reduced-motion: no-preference)`;
  const baseSelector = `.${themeRootClass}.${withMotionClass}`;
  const oppositeSelector = `.${themeRootClass}:not(.${reducedMotionClass})`;

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
