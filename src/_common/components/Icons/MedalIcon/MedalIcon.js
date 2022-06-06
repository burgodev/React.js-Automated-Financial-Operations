import React from "react";

const MedalIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="46" height="46" rx="11" fill="white" />
      <g filter="url(#filter0_d_0_9)">
        <rect
          x="8"
          y="8"
          width="30"
          height="30"
          fill="url(#pattern9)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_9"
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
          id="pattern9"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_0_9" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_0_9"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MedalIcon;
