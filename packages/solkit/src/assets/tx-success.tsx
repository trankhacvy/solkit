import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM9.07715 13.8379C9.4375 13.8379 9.7627 13.6533 9.97363 13.3369L13.7441 7.50977C13.8848 7.29883 13.9814 7.0791 13.9814 6.86816C13.9814 6.34961 13.5244 5.98926 13.0322 5.98926C12.707 5.98926 12.4258 6.16504 12.2148 6.5166L9.05957 11.5967L7.5918 9.79492C7.37207 9.52246 7.13477 9.4082 6.84473 9.4082C6.33496 9.4082 5.92188 9.8125 5.92188 10.3223C5.92188 10.5684 6.00098 10.7793 6.18555 11.0078L8.1543 13.3545C8.40918 13.6709 8.70801 13.8379 9.07715 13.8379Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;