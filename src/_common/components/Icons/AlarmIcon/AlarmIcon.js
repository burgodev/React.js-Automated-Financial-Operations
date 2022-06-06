import React from "react";

const AlarmIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 7.6665C16.25 6.14151 15.6442 4.67897 14.5659 3.60064C13.4875 2.52231 12.025 1.9165 10.5 1.9165C8.97501 1.9165 7.51247 2.52231 6.43414 3.60064C5.3558 4.67897 4.75 6.14151 4.75 7.6665C4.75 14.3748 1.875 16.2915 1.875 16.2915H19.125C19.125 16.2915 16.25 14.3748 16.25 7.6665Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1581 17.2915C11.9896 17.582 11.7478 17.823 11.4568 17.9906C11.1659 18.1582 10.836 18.2464 10.5002 18.2464C10.1644 18.2464 9.83453 18.1582 9.54357 17.9906C9.2526 17.823 9.01077 17.582 8.84229 17.2915"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlarmIcon;
