import React from "react";

const DeveloperIcon = ({ backgroundColor, color = "white", ...props }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="46" height="46" rx="11" fill={color} />
      <g filter="url(#filter0_d_0_1)">
        <rect
          x="8"
          y="8"
          width="30"
          height="30"
          fill="url(#pattern1)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="5"
          y="5"
          width="40"
          height="40"
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
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_0_3" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_0_3"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DeveloperIcon;