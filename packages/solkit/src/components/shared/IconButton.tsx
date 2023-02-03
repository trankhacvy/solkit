// import { styled } from "../../stitches.config";
import { styled } from "../../themes";

export const IconButton = styled("button", {
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  display: "inline-flex",
  flexShrink: 0,
  color: "$iconButtonColor",
  fontFamily: "inherit",
  cursor: "pointer",
  justifyContent: "center",
  lineHeight: "1",
  outline: "none",
  bs: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  br: "$full",
  bc: "transparent",
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  "&:focus-visible": {
    border: "1px solid var(--colors-iconButton)",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "transparent",
    opacity: "50",
  },
  transition: "transform 125ms ease",
  willChange: "transform",
  size: "$iconButtonSize",
  fontSize: "$iconButtonSize",

  variants: {
    variant: {
      close: {
        bc: "$closeButtonBackground",
        border: "1px solid var(--colors-closeButtonBorder)",
        color: "$closeButtonText",
      },
      default: {
        color: "$iconButtonColor",
        "@hover": {
          "&:hover": {
            bc: "$iconButtonHover",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
