import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.99707 13.6543C7.99707 14.085 8.15527 14.4453 8.51562 14.7969L15.1602 21.3096C15.4326 21.5732 15.749 21.7051 16.1357 21.7051C16.9092 21.7051 17.5508 21.0811 17.5508 20.3076C17.5508 19.9121 17.3838 19.5605 17.0938 19.2705L11.3018 13.6455L17.0938 8.0293C17.3838 7.74805 17.5508 7.3877 17.5508 7.00098C17.5508 6.23633 16.9092 5.60352 16.1357 5.60352C15.749 5.60352 15.4326 5.73535 15.1602 5.99902L8.51562 12.5117C8.15527 12.8545 8.00586 13.2148 7.99707 13.6543Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
