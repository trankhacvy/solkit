import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import merge from "lodash.merge";
import { commonTheme } from "./common";
import { lightTheme } from "./lightTheme";
import { SolkitTheme } from "./types";
import { darkTheme } from "./darkTheme";

export const {
  styled,
  css,
  createTheme: createThemeBase,
  getCssText,
  reset,
  globalCss,
  keyframes,
  config,
  theme,
} = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    shadows: {},
    dropShadows: {},
    colors: {
      ...commonTheme.theme.colors,
      ...lightTheme.colors,
    },
  },
});

export type CSS = Stitches.CSS<typeof config>;
export type { VariantProps } from "@stitches/react";
export type CreateTheme = ReturnType<typeof createThemeBase>;

export const createTheme = ({ type, theme, className }: SolkitTheme) => {
  if (!type) {
    throw new Error("Theme type is required");
  }

  return createThemeBase(
    className || `${type}-theme`,
    merge(type === "dark" ? darkTheme : lightTheme, theme)
  );
};
