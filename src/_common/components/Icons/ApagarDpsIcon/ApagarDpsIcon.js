import React from "react";

const ApagarDpsIcon = ({ backgroundColor, color = "#05C7F2", ...props }) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.555 63.0207C47.735 63.0207 47.875 63.0657 47.975 63.1557C48.075 63.2457 48.125 63.3707 48.125 63.5307C48.125 63.7007 48.075 63.8307 47.975 63.9207C47.885 64.0107 47.745 64.0557 47.555 64.0557H42.59C42.4 64.0557 42.255 64.0107 42.155 63.9207C42.065 63.8307 42.02 63.7007 42.02 63.5307C42.02 63.3707 42.07 63.2457 42.17 63.1557C42.27 63.0657 42.41 63.0207 42.59 63.0207H44.45V54.9807L42.815 56.0457C42.735 56.0957 42.655 56.1207 42.575 56.1207C42.435 56.1207 42.31 56.0557 42.2 55.9257C42.1 55.7957 42.05 55.6557 42.05 55.5057C42.05 55.2957 42.13 55.1457 42.29 55.0557L44.57 53.5707C44.74 53.4607 44.915 53.4057 45.095 53.4057C45.265 53.4057 45.405 53.4607 45.515 53.5707C45.625 53.6807 45.68 53.8357 45.68 54.0357V63.0207H47.555ZM53.6691 64.1757C52.4591 64.1757 51.5391 63.7157 50.9091 62.7957C50.2791 61.8757 49.9641 60.5357 49.9641 58.7757C49.9641 57.0057 50.2791 55.6607 50.9091 54.7407C51.5391 53.8207 52.4591 53.3607 53.6691 53.3607C54.8791 53.3607 55.7991 53.8207 56.4291 54.7407C57.0591 55.6507 57.3741 56.9907 57.3741 58.7607C57.3741 60.5307 57.0591 61.8757 56.4291 62.7957C55.7991 63.7157 54.8791 64.1757 53.6691 64.1757ZM53.6691 63.1407C54.5091 63.1407 55.1291 62.7857 55.5291 62.0757C55.9291 61.3657 56.1291 60.2607 56.1291 58.7607C56.1291 57.2507 55.9291 56.1457 55.5291 55.4457C55.1391 54.7457 54.5191 54.3957 53.6691 54.3957C52.8291 54.3957 52.2091 54.7507 51.8091 55.4607C51.4091 56.1607 51.2091 57.2607 51.2091 58.7607C51.2091 60.2607 51.4091 61.3657 51.8091 62.0757C52.2091 62.7857 52.8291 63.1407 53.6691 63.1407ZM62.6633 64.1757C61.4533 64.1757 60.5333 63.7157 59.9033 62.7957C59.2733 61.8757 58.9583 60.5357 58.9583 58.7757C58.9583 57.0057 59.2733 55.6607 59.9033 54.7407C60.5333 53.8207 61.4533 53.3607 62.6633 53.3607C63.8733 53.3607 64.7933 53.8207 65.4233 54.7407C66.0533 55.6507 66.3683 56.9907 66.3683 58.7607C66.3683 60.5307 66.0533 61.8757 65.4233 62.7957C64.7933 63.7157 63.8733 64.1757 62.6633 64.1757ZM62.6633 63.1407C63.5033 63.1407 64.1233 62.7857 64.5233 62.0757C64.9233 61.3657 65.1233 60.2607 65.1233 58.7607C65.1233 57.2507 64.9233 56.1457 64.5233 55.4457C64.1333 54.7457 63.5133 54.3957 62.6633 54.3957C61.8233 54.3957 61.2033 54.7507 60.8033 55.4607C60.4033 56.1607 60.2033 57.2607 60.2033 58.7607C60.2033 60.2607 60.4033 61.3657 60.8033 62.0757C61.2033 62.7857 61.8233 63.1407 62.6633 63.1407ZM71.7024 63.9807C71.5724 64.2007 71.4074 64.3107 71.2074 64.3107C71.0774 64.3107 70.9624 64.2657 70.8624 64.1757C70.7724 64.0857 70.7274 63.9657 70.7274 63.8157C70.7274 63.6957 70.7624 63.5807 70.8324 63.4707L76.5624 53.5557C76.6924 53.3357 76.8574 53.2257 77.0574 53.2257C77.1874 53.2257 77.2974 53.2757 77.3874 53.3757C77.4874 53.4657 77.5374 53.5807 77.5374 53.7207C77.5374 53.8307 77.5074 53.9457 77.4474 54.0657L71.7024 63.9807ZM70.5324 59.8257C69.7324 59.8257 69.1074 59.5557 68.6574 59.0157C68.2074 58.4657 67.9824 57.6557 67.9824 56.5857C67.9824 55.5257 68.2074 54.7257 68.6574 54.1857C69.1074 53.6357 69.7324 53.3607 70.5324 53.3607C71.3324 53.3607 71.9574 53.6357 72.4074 54.1857C72.8574 54.7257 73.0824 55.5257 73.0824 56.5857C73.0824 57.6557 72.8574 58.4657 72.4074 59.0157C71.9574 59.5557 71.3324 59.8257 70.5324 59.8257ZM70.5324 58.9557C71.0224 58.9557 71.3824 58.7657 71.6124 58.3857C71.8524 58.0057 71.9724 57.4057 71.9724 56.5857C71.9724 55.7757 71.8524 55.1807 71.6124 54.8007C71.3824 54.4207 71.0224 54.2307 70.5324 54.2307C70.0424 54.2307 69.6774 54.4207 69.4374 54.8007C69.1974 55.1807 69.0774 55.7757 69.0774 56.5857C69.0774 57.4057 69.1974 58.0057 69.4374 58.3857C69.6774 58.7657 70.0424 58.9557 70.5324 58.9557ZM77.7324 64.1607C76.9324 64.1607 76.3074 63.8907 75.8574 63.3507C75.4074 62.8007 75.1824 61.9907 75.1824 60.9207C75.1824 59.8607 75.4074 59.0607 75.8574 58.5207C76.3074 57.9707 76.9324 57.6957 77.7324 57.6957C78.5424 57.6957 79.1674 57.9657 79.6074 58.5057C80.0574 59.0457 80.2824 59.8507 80.2824 60.9207C80.2824 61.9907 80.0574 62.8007 79.6074 63.3507C79.1674 63.8907 78.5424 64.1607 77.7324 64.1607ZM77.7324 63.2907C78.2324 63.2907 78.5974 63.1057 78.8274 62.7357C79.0674 62.3557 79.1874 61.7507 79.1874 60.9207C79.1874 60.1107 79.0674 59.5157 78.8274 59.1357C78.5874 58.7557 78.2224 58.5657 77.7324 58.5657C77.2424 58.5657 76.8774 58.7557 76.6374 59.1357C76.4074 59.5157 76.2924 60.1107 76.2924 60.9207C76.2924 61.7407 76.4074 62.3407 76.6374 62.7207C76.8774 63.1007 77.2424 63.2907 77.7324 63.2907Z"
        fill="#727272"
      />
      <path
        d="M108.896 68.2885C107.634 75.7319 104.69 82.789 100.287 88.9218C95.8846 95.0547 90.1398 100.101 83.4909 103.677"
        stroke="#05D6F2"
        strokeWidth="20"
        strokeMiterlimit="5.75877"
      />
      <path
        d="M87.1253 101.518C77.0077 108.128 64.8245 110.817 52.8646 109.078"
        stroke="#4278A8"
        strokeWidth="20"
        strokeMiterlimit="5.75877"
      />
      <path
        d="M53.4955 109.209C44.3693 108.002 35.7582 104.282 28.6249 98.4629C21.4915 92.644 16.1169 84.9561 13.1016 76.2582"
        stroke="#05F2DB"
        strokeWidth="20"
        strokeMiterlimit="5.75877"
      />
      <path
        d="M16.3439 83.6206C10.7523 73.2861 9.0083 61.3031 11.4221 49.8035"
        stroke="#05C7F2"
        strokeWidth="20"
        strokeMiterlimit="5.75877"
      />
      <path
        d="M10.3668 59.4306C10.5178 46.267 15.8919 33.7026 25.3067 24.5014"
        stroke="#05AFF2"
        strokeWidth="20"
        strokeMiterlimit="5.75877"
      />
      <path
        d="M22.948 26.9708C30.3064 18.7162 40.2106 13.1551 51.0893 11.17C61.9679 9.18478 73.1979 10.8892 82.9977 16.0127C92.7974 21.1362 100.606 29.3855 105.183 39.4517C109.761 49.5179 110.847 60.8246 108.267 71.5778"
        stroke="#0583F2"
        strokeWidth="20"
        strokeMiterlimit="5.75877"
      />
    </svg>
  );
};

export default ApagarDpsIcon;