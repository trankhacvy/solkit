import { styled } from "../../themes";

export const Button = styled("button", {
  fontFamily: "$body",
  fontSize: "100%",
  lineHeight: "inherit",
  boxSizing: "border-box",
  textTransform: "none",
  userSelect: "none",
  touchAction: "manipulation",
  cursor: "pointer",
  border: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  fontWeight: "$semibold",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  br: "$primaryButton",
  transition: "$button",
  outlineOffset: "2px",
  "&:hover": {
    // transform: "scale(1.025)",
  },
  "&:active": {
    // transform: "scale(0.95)",
  },
  willChange: "transform",

  variants: {
    variant: {
      primary: {
        bc: "$primaryButtonBackground",
        color: "$primaryButtonText",
        "&:focus-visible": {
          outlineColor: "$primaryButtonBackground",
        },
      },
      action: {
        br: "$actionButton",
        bc: "$actionButtonBackground",
        color: "$actionButtonText",
        "&:focus-visible": {
          outlineColor: "$actionButtonBackground",
        },
      },
    },
    size: {
      small: {
        minHeight: "$smallButtonMinHeight",
        padding: "$smallButtonPadding",
        fontSize: "$smallButtonFontSize",
        lineHeight: "1",
      },
      large: {
        minHeight: "$largeButtonMinHeight",
        padding: "$largeButtonPadding",
        fontSize: "$largeButtonFontSize",
        lineHeight: "1",
      },
    },
  },
  defaultVariants: {
    size: "large",
  },
});
