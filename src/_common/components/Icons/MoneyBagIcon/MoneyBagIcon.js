import React from "react";

const MoneyBagIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="49" height="49" rx="13" fill="white" />
      <g filter="url(#filter0_d_0_1)">
        <rect
          x="7"
          y="7"
          width="34"
          height="34"
          fill="url(#pattern0)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="4"
          y="4"
          width="44"
          height="44"
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
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_0_1" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_0_1"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MoneyBagIcon;