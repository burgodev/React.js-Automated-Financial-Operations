import React from "react";

const ManagerIcon = ({ backgroundColor, color, ...props }) => {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="43" height="43" rx="13" />
      {/* <rect width="43" height="43" rx="13" fill={backgroundColor} /> */}
      <rect
        x="5"
        y="5"
        width="33"
        height="33"
        rx="9"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M32 37V34.3333C32 32.9188 31.4205 31.5623 30.3891 30.5621C29.3576 29.5619 27.9587 29 26.5 29H15.5C14.0413 29 12.6424 29.5619 11.6109 30.5621C10.5795 31.5623 10 32.9188 10 34.3333V37"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 24.6667C24.0376 24.6667 26.5 22.2789 26.5 19.3333C26.5 16.3878 24.0376 14 21 14C17.9624 14 15.5 16.3878 15.5 19.3333C15.5 22.2789 17.9624 24.6667 21 24.6667Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ManagerIcon;
