import React from "react";
import { Text } from "./Text";
// import { VariantProps, CSS } from "../../stitches.config";
import { CSS, VariantProps } from "../../themes";
import merge from "lodash.merge";

const DEFAULT_TAG = "h1";

type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;
type HeadingSizeVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  "size"
>;
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any };

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { size = "h1", ...textProps } = props;

  const textSize: Record<HeadingSizeVariants, TextSizeVariants["size"]> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  };

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: "proportional-nums",
        ...merge(textCss[size], props.css),
      }}
    />
  );
});
