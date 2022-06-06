import React from "react";

const ConfirmIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.4799 1.83936L5.41614 10.9031L1.29626 6.78321"
        stroke="#69BF41"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ConfirmIcon;
