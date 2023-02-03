// import { styled } from "../../stitches.config";
import { styled } from "../../themes";
import { Text } from "./Text";

export const Link = styled("a", {
  outline: "none",
  textDecorationLine: "none",
  textUnderlineOffset: "3px",
  textDecorationColor: "$secondaryText",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "inherit",
  cursor: "pointer",
  fontFamily: "$body",
  "&:hover": {
    textDecorationLine: "underline",
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    textDecorationLine: "none",
  },
  [`& ${Text}`]: {
    color: "inherit",
  },

  variants: {
    colorScheme: {
      brand: {
        color: "$brand",
        textDecorationColor: "$brand",
        "&:focus": {
          outlineColor: "$brand",
        },
      },
      neutral: {
        color: "$primaryText",
        textDecorationColor: "$primaryText",
        "&:focus": {
          outlineColor: "$primaryText",
        },
      },
    },
    noUnderline: {
      true: {
        "&:hover": {
          textDecorationLine: "none",
        },
      },
    },
  },
});
