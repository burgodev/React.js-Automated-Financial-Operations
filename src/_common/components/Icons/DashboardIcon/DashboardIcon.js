import React from "react";

const DashboardIcon = ({ backgroundColor, color, ...props }) => {
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
      <path
        d="M10 16.9998L22 7.6665L34 16.9998V31.6665C34 32.3737 33.719 33.052 33.219 33.5521C32.7189 34.0522 32.0406 34.3332 31.3333 34.3332H12.6667C11.9594 34.3332 11.2811 34.0522 10.781 33.5521C10.281 33.052 10 32.3737 10 31.6665V16.9998Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 34.3333V21H27V34.3333"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
