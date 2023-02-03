// import { styled, keyframes } from "../../stitches.config";
import { styled, keyframes } from "../../themes";

const shimmer = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.4 },
  "100%": { opacity: 1 },
});

export const Skeleton = styled("div", {
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  bc: "$skeletonBackground",
  animation: `${shimmer} 1.5s ease-in-out infinite`,
});
