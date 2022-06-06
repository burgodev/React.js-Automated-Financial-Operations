import React from "react";

const SignaturesIcon = ({ backgroundColor, color, ...props }) => {
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
        d="M21.5 25.6667C24.5376 25.6667 27 23.2789 27 20.3333C27 17.3878 24.5376 15 21.5 15C18.4624 15 16 17.3878 16 20.3333C16 23.2789 18.4624 25.6667 21.5 25.6667Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="21.4397"
        cy="9.43968"
        rx="1.43968"
        ry="1.43968"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M21.4409 10.8784V14.3337"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SignaturesIcon;
