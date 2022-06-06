import React from "react";

const CancelIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.94603 18.8921C14.8868 18.8921 18.8921 14.8868 18.8921 9.94603C18.8921 5.00527 14.8868 1 9.94603 1C5.00527 1 1 5.00527 1 9.94603C1 14.8868 5.00527 18.8921 9.94603 18.8921Z"
        stroke="#E84949"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5357 7.5918L7.5918 12.7711"
        stroke="#E84949"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5918 7.5918L12.5357 12.7711"
        stroke="#E84949"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CancelIcon;
