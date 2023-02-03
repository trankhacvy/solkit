import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
// import { styled, keyframes, CSS, VariantProps } from "../../stitches.config";
import { styled, keyframes, CSS, VariantProps } from "../../themes";
import { isMobile } from "../../utils/isMobile";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

const overlayShow = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$modalOverlay",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 4s cubic-bezier(0.16, 1, 0.3, 1)`,
});

const slideIn = keyframes({
  from: { transform: "$$transformValue" },
  to: { transform: "translate(-50%, 0)" },
});

const slideOut = keyframes({
  from: { transform: "translate(-50%,0,0)" },
  to: { transform: "$$transformValue" },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate(calc(-50% - 32px), -48%) scale(0.96)",
  },
  to: { opacity: 1, transform: "translate(calc(-50% - 32px), -50%) scale(1)" },
});

const StyledContent = styled(DialogPrimitive.Content, {
  bc: "$modalBackground",
  br: "$modal",
  bs: "$modal",
  position: "fixed",
  mx: "32px",
  p: "20px",
  willChange: "transform",
  maxHeight: "85vh",
  fontFamily: "$body",
  "&:focus": {
    outline: "none",
  },

  variants: {
    variant: {
      desktop: {
        top: "50%",
        left: "50%",
        transform: "translate(calc(-50% - 32px), -50%)",
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      mobile: {
        $$transformValue: "translate(-50%, 100%)",
        bottom: 0,
        left: "50%",
        mx: "auto",
        transform: "translateX(-50%)",
        br: "unset",
        borderTopLeftRadius: "$modalMobile",
        borderTopRightRadius: "$modalMobile",

        '&[data-state="open"]': {
          animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },

        '&[data-state="closed"]': {
          animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },
      },
    },
    // sheet: {
    //   true: {
    //     $$transformValue: "translate3d(-50%,100%,0)",
    //     // width: "100% !important",
    //     bottom: 0,
    //     top: "auto",
    //     left: "50%",
    //     mx: "auto",
    //     transform: "unset",
    //     br: "unset",
    //     borderTopLeftRadius: "$modalMobile",
    //     borderTopRightRadius: "$modalMobile",

    //     '&[data-state="open"]': {
    //       animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    //     },

    //     '&[data-state="closed"]': {
    //       animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    //     },
    //   },
    // },
  },
  defaultVariants: {
    variant: "desktop",
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  zIndex: "$50",
  size: "$closeButtonSize",
});

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
type DialogContentProps = DialogContentPrimitiveProps &
  VariantProps<typeof StyledContent> & { css?: CSS };

const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => {
  const mobile = isMobile();
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent
        variant={mobile ? "mobile" : "desktop"}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  );
});

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  StyledCloseButton as DialogClose,
  DialogTitle,
  DialogDescription,
};
