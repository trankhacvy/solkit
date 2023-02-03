// import { styled } from "../../stitches.config";
import { styled } from "../../themes";

export const Text = styled("p", {
  lineHeight: "1.5",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",
  fontFamily: "$body",

  variants: {
    size: {
      h1: {
        fontSize: "$h1",
      },
      h2: {
        fontSize: "$h2",
      },
      h3: {
        fontSize: "$h3",
      },
      h4: {
        fontSize: "$h4",
      },
      h5: {
        fontSize: "$h5",
      },
      h6: {
        fontSize: "$h6",
      },
      body1: {
        fontSize: "$body1",
      },
      body2: {
        fontSize: "$body2",
      },
      caption: {
        fontSize: "$caption",
      },
    },
    variant: {
      brand: {
        color: "$brand",
      },
      primary: {
        color: "$primaryText",
      },
      secondary: {
        color: "$secondaryText",
      },
      error: {
        color: "$errorText",
      },
    },
    fontWeight: {
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
      extrabold: {
        fontWeight: "$extrabold",
      },
    },
  },
  defaultVariants: {
    size: "body1",
    variant: "primary",
  },
});
