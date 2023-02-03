import { Heading } from "../../shared/Heading";
import { IconButton } from "../../shared/IconButton";
import { Flex } from "../../shared/Flex";
import IconChevronLeft from "../../../assets/chevron-left";
import IconClose from "../../../assets/close";
import { DialogClose } from "../../shared/Dialog";

type HeaderType = {
  hasBack?: boolean;
  onBack?: VoidFunction;
  hasClose?: boolean;
  title?: string;
};

export const Header = ({
  title,
  hasBack = false,
  onBack,
  hasClose = false,
}: HeaderType) => {
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        position: "relative",
        width: "$full",
        height: "$modalHeaderHeight",
      }}
    >
      {hasBack && (
        <IconButton
          css={{
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
          }}
          aria-label="Back"
          onClick={onBack}
        >
          <IconChevronLeft aria-hidden role="img" />
        </IconButton>
      )}
      <Heading as="h2" size="h6" css={{ fontWeight: "$semibold" }}>
        {title}
      </Heading>
      {hasClose && (
        <DialogClose asChild>
          <IconButton
            css={{
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              position: "absolute",
            }}
            variant="close"
            aria-label="Close"
          >
            <IconClose aria-hidden role="img" />
          </IconButton>
        </DialogClose>
      )}
    </Flex>
  );
};
