import React from "react";

const LeftArrowIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1)">
        <rect x="3" y="3" width="41" height="41" rx="11" fill="#05C7F2" />
      </g>
      <path
        d="M31.5576 32.6992L22.7966 23.8497L31.5576 15.0001"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.761 32.6992L13.9999 23.8497L22.761 15.0001"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_0_5"
          x="0"
          y="0"
          width="51"
          height="51"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect3_dropShadow_0_5"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_0_5"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LeftArrowIcon;
